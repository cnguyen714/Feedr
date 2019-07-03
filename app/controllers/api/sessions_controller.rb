class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_action :require_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render json: ["Logged In"]
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def destroy
    logout!
    render json: ["Logged out"]
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
