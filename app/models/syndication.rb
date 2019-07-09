class Syndication < ApplicationRecord
  validates :name, :rss_url, presence: true

  has_many :follows, dependent: destroy

  has_many :feeds,
    through: :follows

  # has_many :articles

  def fetch_articles

  end
end
