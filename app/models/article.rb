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
  validates :title, :article_url, :source_id, :published_at, presence: true
  validates :article_url, uniqueness: true

  belongs_to :source
end
