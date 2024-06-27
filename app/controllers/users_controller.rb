class UsersController < ApplicationController
    def index
        @users = User.all

        render json: @users
    end

    def create
        user = User.create!(
            email: params['user']['email'],
            password: params['user']['password'],
        )
    end

end
