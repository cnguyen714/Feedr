@articles.each do |article|
  json.set! article.id do
    json.partial! 'api/articles/article', article: article
  end
end
