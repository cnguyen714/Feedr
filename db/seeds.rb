# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



ActiveRecord::Base.transaction do
  User.delete_all
  
  demoUser = User.new(username: "demoUser", email: "demo@feedr.com", password: "password")
  demoUser.save!

  Feed.new(name: "Feed1", user_id: demoUser.id).save
  Feed.new(name: "Feed2", user_id: demoUser.id).save
  Feed.new(name: "Feed3", user_id: demoUser.id).save
  
end