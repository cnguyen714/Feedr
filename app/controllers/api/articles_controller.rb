class Api::ArticlesController < ApplicationController

  before_action :require_logged_in

  def index
    # if you find a feed_id param, fetch articles from feeds
    if (params['feed_id'] != nil) 
      feed = Feed.find_by(id: params['feed_id'])

      if !feed 
        render json: ["Feed does not exist"], status: 404 
        return
      elsif feed.user_id != current_user.id
        render json: ["You don't own this feed "], status: 401
        return
      end
      
      feed.sources.each do |source|
        source.fetch_articles
      end


      @articles = feed.articles.order(published_at: :desc).take(15)
      render "api/articles/index"

      # if you find a source_id param, fetch articles from source
    elsif (params['source_id'] != nil)
      source = Source.find_by(id: params['source_id'])

      if !source 
        render json: ["Source does not exist"], status: 404 
        return
      end
      
      source.fetch_articles

      @articles = source.articles.order(published_at: :desc).take(30)
      render "api/articles/index"
    
    # if you find no params, you must be at all feeds, so fetch everything
    else
      current_user.sources.each do |source|
        source.fetch_articles
      end

      @articles = current_user.articles.order(published_at: :desc).take(15)
      render "api/articles/index"
    end
  end

  def show
    @article = Article.find_by(id: params['id']) 
    
    if !@article 
      render json: ["Article does not exist"], status: 404 
      return
    end

    render "api/articles/show"
  end

end
