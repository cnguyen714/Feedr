@sources.each do |source|
  json.set! source.id do
    json.partial! 'api/sources/source', source: source
  end
end
