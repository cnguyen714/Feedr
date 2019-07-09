# == Schema Information
#
# Table name: follows
#
#  id         :bigint           not null, primary key
#  feed_id    :integer          not null
#  source_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ApplicationRecord
  validates :feed_id, :source_id, presence: true
  validates_uniqueness_of :feed_id, :scope => [:source_id]

  belongs_to :feed
  belongs_to :source
end
