
# You can run this locally with:
#    bundle exec rake feedr:run_all
# 
# or on production:
#    heroku run rake feedr:run_all

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
    count = 0
    while Article.count >= 8500
      count += 100
      Article.limit(100).each do |article|
        article.destroy
      end
    end
    puts count.to_s + " Articles were pruned"
    puts "task: prune_articles done"
  end

  task :run_all => [:prune_articles, :fetch_articles] do
    puts "task: run_all done"
  end
end
