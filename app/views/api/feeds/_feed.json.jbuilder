json.extract! feed, :id, :name
json.sourceIds feed.sources.to_a.map { |source| source[:id] }
