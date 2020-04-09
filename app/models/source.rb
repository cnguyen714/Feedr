# == Schema Information
#
# Table name: sources
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  source_url  :string
#  stream_url  :string           not null
#  icon_url    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#
# include AbstractController::Rendering

class Source < ApplicationRecord
  validates :name, :stream_url, presence: true

  belongs_to :user, optional: true

  has_many :follows, dependent: :destroy
  has_many :feeds, through: :follows
  has_many :articles, dependent: :destroy

  before_validation :populate_source

  def populate_source()
    url = self.stream_url

    begin
      xml = HTTParty.get(url).body
    rescue => exception
      render json: ["Not a valid URL"], status: 404
      return
    end

    if xml[2..4] != "xml"
      render json: ["Could not read XML file at RSS/Atom URL"], status: 400
      return
    end

    begin
      feed = Feedjira.parse(xml)
    rescue => exception
      render json: ["Could not parse XML"], status: 400
      return
    end
    
    self[:name] = feed.title
    self[:description] = feed.description
    self[:source_url] = feed.url
  end

  def fetch_articles
    url = self.stream_url
    xml = HTTParty.get(url).body
    feed = Feedjira.parse(xml)

    feed.entries.each do |entry|
      if entry.instance_variables.include?(:@content)
        body = entry.content
      else
        body = entry.summary
      end
      content_doc = Nokogiri::HTML(body)
      content = ActionView::Base.full_sanitizer.sanitize(body)
      begin
        image_url = content_doc.xpath("//img").first.attributes["src"].value
        image_url = nil unless url_exist?(image_url)
      rescue => exception
        image_url = nil
      end
      article = Article.new(title: entry.title, 
                            body: content, 
                            article_url: entry.url, 
                            image_url: image_url, 
                            source_id: self.id, 
                            published_at: entry.published, 
                            author: entry.author )

      # return when an article fails to save, its likely you've hit a duplicate date
      return unless article.save
    end

    return
  end

  private

  def url_exist?(url_string)
    return if url_string = nil
    url = URI.parse(url_string)
    req = Net::HTTP.new(url.host, url.port)
    req.use_ssl = (url.scheme == 'https')
    path = url.path if url.path.present?
    res = req.request_head(path || '/')
    return res.code == "200" # false if returns 404 - not found
  rescue Errno::ENOENT
    false # false if can't find the server
  end

end
