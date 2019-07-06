json.extract! user, :id, :email, :username
json.subscribedFeeds user.feeds.to_a.map { |feed|  feed[:id] }
