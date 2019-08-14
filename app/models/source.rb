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

class Source < ApplicationRecord
  validates :name, :stream_url, presence: true

  belongs_to :user, optional: true

  has_many :follows, dependent: :destroy
  has_many :feeds, through: :follows

  has_many :articles, dependent: :destroy

  before_validation :populate_source

  def populate_source
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
end
