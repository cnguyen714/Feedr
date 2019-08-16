json.items do
  json.array!(@sources) do |source|
    json.name source.name
    json.stream_url source.stream_url
  end
end