# == Schema Information
#
# Table name: articles
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  body         :string
#  article_url  :string           not null
#  image_url    :string
#  source_id    :integer          not null
#  published_at :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Article < ApplicationRecord
  validates :article_url, :source_id, :published_at, presence: true
  # validates [:article_url, :source_id, :published_at], uniqueness: true
  validates_uniqueness_of :article_url, :scope => [:source_id, :published_at]

  belongs_to :source

  # find articles
  def self.fetch_articles(source_id)
    src = Source.find_by(id: source_id)
    url = src.stream_url
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
      rescue => exception
        image_url = nil
      end
      article = Article.new(title: entry.title, body: content, article_url: entry.url, image_url: image_url, source_id: source_id, published_at: entry.published, author: entry.author )
      # article.save
      # debugger
      if !article.save
        return
      end
    end
    return
  end

end
