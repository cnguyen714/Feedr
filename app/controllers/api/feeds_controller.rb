class Api::FeedsController < ApplicationController

  before_action :require_logged_in

  def index
    @feeds = current_user.feeds
    render "api/feeds/index"
  end

  def show
    render "api/feeds/show"
  end

  def create

  end

  def update

  end

  def destroy

  end

end
