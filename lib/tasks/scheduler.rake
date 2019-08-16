
desc "This task is called by the Heroku scheduler add-on"
task :fetch_articles => :environment do
  puts "Updating sources..."
  Source.all.each do |src| 
    src.fetch_articles
  end
  puts "task: fetch_articles done."
end

