json.extract! feed, :id, :name
json.sourceIds feed.sources.to_a.map { |source| source[:id] }
json.set! :followIds do 
  feed.follows.to_a.each do |follow|
    json.set! follow.source.id, follow.id
  end
end

