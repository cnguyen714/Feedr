class Api::MainController < ApplicationController

  before_action :force_json, only: :search

  def index; end

  def search_source
    # @sources = Source.ransack(name: params[:q]).result(distinct: true).limit(5)
    @sources = Source.where("LOWER(name) LIKE ?", "%#{params[:q]}%").limit(5)
  end

  private

  def force_json
    request.format = :json
  end
end
