class Api::ArticlesController < ApplicationController

  before_action :require_logged_in

  def index
    if (params['feed_id'] != nil)
      feed = Feed.find_by(id: params['feed_id'])

      if !feed 
        render json: ["Feed does not exist"], status: 404 
        return
      elsif feed.user_id != current_user.id
        render json: ["You don't own this feed "], status: 401
        return
      end
      
      @articles = feed.articles
      render "api/articles/index"
    elsif (params['source_id'] != nil)
      source = Source.find_by(id: params['source_id'])

      if !source 
        render json: ["Source does not exist"], status: 404 
        return
      end
      
      @articles = source.articles
      render "api/articles/index"
    else
      @articles = current_user.articles
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
