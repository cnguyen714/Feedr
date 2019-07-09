class Api::SourcesController < ApplicationController

  before_action :require_logged_in
  before_action :require_source_exists

  def require_source_exists
    @source = Source.find_by(id: params['id'])

    unless @source
      render json: ["Source does not exist"], status: 404
    end
  end

  def show
    @source = Source.find_by(id: params[:id])
    render "api/sources/show"
  end
  
end
