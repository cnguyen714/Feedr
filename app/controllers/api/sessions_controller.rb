class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_action :require_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])

    if @user
      login!(@user)
      render :show
    else
      render json: ["Invalid email/password"], status: 401
    end

  end

  def destroy
    @user = current_user
    if @user 
      logout!
      render :show
    else
      render json: ["Already logged out"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
