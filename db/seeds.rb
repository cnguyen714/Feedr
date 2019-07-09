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
  
  demoUser = User.new(username: "demoUser", email: "demo@feedr.com", password: "password")
  user1 = User.new(username: "calvin", email: "calvin@feedr.com", password: "password")
  user2 = User.new(username: "Allie", email: "Allie@feedr.com", password: "password1")
  user3 = User.new(username: "kyouka", email: "kyouka@feedr.com", password: "password1")
  
  
  demoUser.save!
  user1.save!
  user2.save!
  user3.save!

  Feed.new(name: "Feed1", user_id: demoUser.id).save
  Feed.new(name: "Feed2", user_id: demoUser.id).save
  Feed.new(name: "Feed3", user_id: demoUser.id).save


  
end