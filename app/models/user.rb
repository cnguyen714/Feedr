# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, maximum: 25, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :feeds, dependent: :destroy

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil unless user

    return user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    return BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64()
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64()
  end
end
