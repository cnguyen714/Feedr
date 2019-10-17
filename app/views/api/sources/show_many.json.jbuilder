json.array!(@sources) do |source|
  json.partial! 'api/sources/source', source: source
end
