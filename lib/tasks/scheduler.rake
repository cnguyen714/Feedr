
desc "This task is called by the Heroku scheduler add-on"

namespace :feedr do
  task :fetch_articles => :environment do
    puts "Updating sources..."
    Source.all.each do |src| 
      src.fetch_articles
    end
    puts "task: fetch_articles done"
  end

  task :prune_articles => :environment do
    puts "Pruning old articles..."
    while Article.count >= 8500
      print "Destroying 100..."
      Article.limit(100).each do |article|
        article.destroy
      end
    end
    puts "task: prune_articles done"
  end

  task :run_all => [:fetch_articles, :prune_articles] do
    puts "task: run_all done"
  end
end
