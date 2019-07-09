# == Schema Information
#
# Table name: feeds
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feed < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user
  has_many :follows
  has_many :sources, through: :follows

end
