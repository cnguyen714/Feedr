class Api::FollowsController < ApplicationController

  before_action :require_logged_in
  before_action :require_follow_exists, only: [:destroy]

  def require_follow_exists
    @follow = Follow.find_by(id: params['id'])
    
    unless @follow
      render json: ["Follow does not exist"], status: 404
    end
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 400
    end
  end

  def destroy
    @follow = Follow.find(params['id'])
    if @follow.destroy
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 404
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:feed_id, :source_id)
  end
end
