# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



ActiveRecord::Base.transaction do
  User.delete_all
  Feed.delete_all
  Source.delete_all
  Follow.delete_all
  
  demoUser = User.new(username: "demoUser", email: "demo@feedr.com", password: "password")
  user1 = User.new(username: "calvin", email: "calvin@feedr.com", password: "password")
  user2 = User.new(username: "Allie", email: "Allie@feedr.com", password: "password1")
  user3 = User.new(username: "kyouka", email: "kyouka@feedr.com", password: "password1")
  demoUser.save!
  user1.save!
  user2.save!
  user3.save!

  feed1 = Feed.new(name: "Games", user_id: demoUser.id)
  feed2 = Feed.new(name: "Feed2", user_id: demoUser.id)
  feed3 = Feed.new(name: "Feed3", user_id: demoUser.id)
  feed1.save
  feed2.save
  feed3.save

  src1 = Source.new(name: "Polygon - All", source_url: "https://www.polygon.com/", stream_url: "https://www.polygon.com/rss/index.xml")
  src1.save
  follow1 = Follow.new(feed_id: feed1.id, source_id: src1.id)
  follow1.save

end