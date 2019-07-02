class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.findByCredentials(username, password)
    user = User.findBy(username: username)

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
    self.session_token ||= SecureRandom.base64_urlsafe()
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64_urlsafe()
  end
end
