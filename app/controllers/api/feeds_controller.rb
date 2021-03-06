class Api::FeedsController < ApplicationController

  before_action :require_logged_in
  before_action :require_feed_exists, only: [:show, :update, :destroy]
  before_action :require_ownership_feed, only: [:show, :update, :destroy]
  
  
  def require_feed_exists
    @feed = Feed.find_by(id: params['id'])
    
    unless @feed
      render json: ["Feed does not exist"], status: 404
    end
  end
  
  def require_ownership_feed
    @feed = Feed.find(params['id'])

    if @feed && @feed.user_id != current_user.id
      render json: ["You don't own this feed"], status: 401
    end
  end
  
  ## === RESTful routes ===

  def index
    @feeds = current_user.feeds.order("name ASC")

    unless @feeds.empty?
      render "api/feeds/index"
    else
      render json: ["You have no feeds"], status: 400
    end
  end

  def show
    @feed = Feed.find(params['id'])

    render "api/feeds/show"
  end

  def create
    @feed = Feed.new(feed_params)
    @feed[:user_id] = current_user.id;

    if @feed.save
      render "api/feeds/show"
    else # shouldn't ever fail, but whaddya know?
      render json: @feed.errors.full_messages, status: 400
    end
  end

  def update
    @feed = Feed.find(params['id'])

    if @feed.update_attributes(feed_params)
      render "api/feeds/show"
    else
      render json: @feed.errors.full_messages, status: 400
    end
  end

  def destroy
    @feed = Feed.find(params['id'])

    if @feed.destroy
      render "api/feeds/show"
    else
      render json: @feed.errors.full_messages, status: 400
    end
  end

  private
  def feed_params
    params.require(:feed).permit(:name, :user_id)
  end
end
