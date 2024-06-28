class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params['user']['email']);

    if @user && @user.authenticate(params['user']['password'])
      render json: {
        logged_in: true,
        user: @user
      }
    else 
      render json: {
        logged_in: false,
        status: 401,
        errors: ['No such user']
      }
    end
  end

  def destroy
  end
end
