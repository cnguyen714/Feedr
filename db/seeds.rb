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
  Article.delete_all
  
  demoUser = User.new(username: "demoUser", email: "demo@feedr.com", password: "password");   demoUser.save!
  user1 = User.new(username: "calvin", email: "calvin@feedr.com", password: "password");   user1.save!
  user2 = User.new(username: "Allie", email: "Allie@feedr.com", password: "password1");   user2.save!
  user3 = User.new(username: "kyouka", email: "kyouka@feedr.com", password: "password1");   user3.save!

  feed1 = Feed.new(name: "Games", user_id: demoUser.id); feed1.save
  feed2 = Feed.new(name: "Comics", user_id: demoUser.id); feed2.save
  feed3 = Feed.new(name: "Productivity", user_id: demoUser.id); feed3.save
  
  src1 = Source.new(stream_url: "https://www.polygon.com/rss/index.xml")
  src1.save
  follow1 = Follow.new(feed_id: feed1.id, source_id: src1.id)
  follow1.save
  
  src2 = Source.new(stream_url: "https://xkcd.com/rss.xml", description: "Gaming Reviews, News, Tips and More.")
  src2.save
  follow2 = Follow.new(feed_id: feed2.id, source_id: src2.id)
  follow2.save
  
  src3 = Source.new(stream_url: "http://www.threepanelsoul.com/comic/rss")
  src3.save
  follow3 = Follow.new(feed_id: feed2.id, source_id: src3.id)
  follow3.save
  
  src4 = Source.new(stream_url: "https://kotaku.com/rss")
  src4.save
  follow4 = Follow.new(feed_id: feed1.id, source_id: src4.id)
  follow4.save
  
  src5 = Source.new(stream_url: "https://lifehacker.com/rss")
  src5.save
  follow5 = Follow.new(feed_id: feed3.id, source_id: src5.id)
  follow5.save
  
  src6 = Source.new(stream_url: "http://cucumber.gigidigi.com/feed/")
  src6.save
  follow6 = Follow.new(feed_id: feed2.id, source_id: src6.id)
  follow6.save
  
  src7 = Source.new(stream_url: "https://www.lackadaisy.com/rss/")
  src7.save
  follow7 = Follow.new(feed_id: feed2.id, source_id: src7.id)
  follow7.save
  
  src8 = Source.new(stream_url: "https://gematsu.com/feed/")
  src8.save
  follow8 = Follow.new(feed_id: feed1.id, source_id: src8.id)
  follow8.save
  
  src9 = Source.new(stream_url: "https://indiegamesplus.com/feed")
  src9.save
  follow9 = Follow.new(feed_id: feed1.id, source_id: src9.id)
  follow9.save
  
  src10 = Source.new(stream_url: "https://www.siliconera.com/feed/")
  src10.save
  follow10 = Follow.new(feed_id: feed1.id, source_id: src10.id)
  follow10.save

end