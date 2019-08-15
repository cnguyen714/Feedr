class Api::SourcesController < ApplicationController

  before_action :require_logged_in
  before_action :require_source_exists, only: [:show, :update, :destroy]
  before_action :require_ownership_source, only: [:update, :destroy]

  def require_source_exists
    @source = Source.find_by(id: params['id'])

    unless @source
      render json: ["Source does not exist"], status: 404
    end
  end

  def require_ownership_source
    @source = Source.find_by(id: params['id'])

    if @source && @source.user_id != current_user.id
      render json: ["You don't own this source"], status: 401
    end
  end

  #RESTful Routes

  def index
    if (params['feed_id'] == nil) 
      @sources = current_user.sources.order("name ASC")
      render "api/sources/index"
      return
    end

    feed = Feed.find_by(id: params['feed_id'])

    if !feed 
      render json: ["Feed does not exist"], status: 404 
      return
    elsif feed.user_id != current_user.id
      render json: ["You don't own this feed "], status: 401
      return
    end
    
    @sources = feed.sources
    render "api/sources/index"
  end

  def show
    @source = Source.find_by(id: params['id'])
    # Article.fetch_articles(@source)
    render "api/sources/show"
  end
  
  def create
    source_by_url = Source.find_by(stream_url: source_params[:stream_url])
    
    t = Source.arel_table
    source_by_name = Source.where(t[:name].matches(source_params[:stream_url]))[0]
    sourced = source_by_url || source_by_name

    # if source exists, go straight to show
    if sourced
      @source = sourced
      render "api/sources/show"
      return
    end

    # otherwise create a new source
    @source = Source.new(source_params)
    @source[:user_id] = current_user.id;

    url = @source.stream_url
    begin
      xml = HTTParty.get(url).body
    rescue => exception
      render json: ["Not a valid URL. Did you include `http://` ?"], status: 404
      return
    end

    if xml[2..4].downcase != "xml"
      render json: ["Could not read XML file at RSS/Atom URL"], status: 400
      return
    end

    begin
      feed = Feedjira.parse(xml)
    rescue => exception
      render json: ["Could not parse XML"], status: 400
      return
    end
    @source[:name] = feed.title
    @source[:description] = feed.description
    @source[:source_url] = feed.url

    # do one last check on parsed source name before attempting to save
    source_by_name = Source.find_by(name: feed.title)
    if source_by_name
      @source = source_by_name 
      render "api/sources/show"
      return
    end

    if @source.save
      render "api/sources/show"
    else 
      render json: @source.errors.full_messages, status: 400
    end
  end

  def update
    @source = Source.find(params['id'])

    if @source.update_attributes(feed_params)
      render "api/sources/show"
    else
      render json: @source.errors.full_messages, status: 400
    end
  end

  def destroy
    @source = Source.find(params['id'])

    if @source.destroy
      render "api/sources/show"
    else
      render json: @source.errors.full_messages, status: 400
    end
  end

  private
  def source_params
    params.require(:source).permit(:name, :description, :source_url, :stream_url, :icon_url)
  end

end
