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
#

class Source < ApplicationRecord
  validates :name, :stream_url, presence: true

  has_many :follows
  has_many :feeds, through: :follows
end
