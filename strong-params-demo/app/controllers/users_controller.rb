class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    # using strong params for a new user
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      render 'confirmed'
    else
      render 'not_confirmed'
    end

  end

  private

  # defining strong params for a user
  def user_params
    # require a user key and permit the nested name and email keys in params
    params.require(:user).permit(:name, :email)
  end

end
