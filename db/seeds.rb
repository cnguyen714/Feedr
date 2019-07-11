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
  src2 = Source.new(name: "xkcd", source_url: "https://xkcd.com/", stream_url: "https://xkcd.com/rss.xml")
  src2.save
  src3 = Source.new(name: "ThreePanelSoul", source_url: "http://www.threepanelsoul.com/", stream_url: "http://www.threepanelsoul.com/comic/rss")
  src3.save
  follow1 = Follow.new(feed_id: feed1.id, source_id: src1.id)
  follow1.save
  follow2 = Follow.new(feed_id: feed2.id, source_id: src2.id)
  follow2.save
  follow3 = Follow.new(feed_id: feed2.id, source_id: src3.id)
  follow3.save

  # art1 = Article.new(title: "Final Fantasy 14: Shadowbringers is one of the best MMOs available for both fans and newcomers", body: "After stumbling through its launch, Final Fantasy 14 has been made anew by director Naoki Yoshida. It has evolved from a punchline to a fan favorite to one of the biggest MMOs on the market. The latest expansion, Shadowbringers, feels like its overdue victory lap. Final Fantasy 14 has become one of the best stories in the franchise. It’s also one of the longest. While the latest expansion is a feast for all Final Fantasy fans, its twists, turns, and character growth will resonate best with those who’ve played all the earlier expansions. And yet, this is still the best time for newcomers to jump onboard. Whether they should skip to the latest expansion or work through the tons of quests and story that build to this moment is a tricky question to answer. It will depend on what you’re willing to sacrifice: time or story.", article_url: "https://www.polygon.com/reviews/2019/7/9/20687643/final-fantasy-14-shadowbringers-review", image_url: "https://cdn.vox-cdn.com/thumbor/feoakfvkg3OMDq7ePjfzTaz_3m4=/0x0:1920x1080/2070x1164/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64695396/ffxiv_shadowbringers_trailer_still.0.jpg", source_id: src1.id, published_at: "2019-07-09T16:20:00-04:00" )


end