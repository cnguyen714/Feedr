
desc "This task is called by the Heroku scheduler add-on"
task :fetch_articles => :environment do
  puts "Updating sources..."
  Source.all.each do |src| 
    src.fetch_articles
  end
  puts "Updated"
  puts "Pruning old articles..."
  if Article.count >= 8500 do
    Article.limit(100).each do |article|
      article.destroy
    end
  end
  puts "Pruned"
  puts "task: fetch_articles done."
end

