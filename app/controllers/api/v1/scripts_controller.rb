class Api::V1::ScriptsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_script, only: [:show, :edit, :update, :destroy]
  protect_from_forgery with: :null_session

  def index
    @scripts = current_user.scripts.all

    # render json: ScriptSerializer.new(scripts, options).serialized_json
  end

  def show
    if authorized?
      respond_to do |format|
        format.json { render :show }
      end
    else
      handle_unauthorized
    end
    # render json: ScriptSerializer.new(@script, options).serialized_json
  end

  # def create
  #   script = Script.new(script_params)
  #   script.user = current_user

  #   if script.save
  #     render json: ScriptSerializer.new(@script).serialized_json
  #   else
  #     render json: { error: script.errors.messages }, status: 422
  #   end
  # end

  def create
    @script = current_user.scripts.build(script_params)
    if authorized?
      respond_to do |format|
        if @script.save
          format.json { render :show, status: :created, location: api_v1_script_path(@script) }
        else
          format.json { render json: @script.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  # def update
  #   if script.update(script_params)
  #     render json: ScriptSerializer.new(@script, options).serialized_json
  #   else
  #     render json: { error: script.errors.messages }, status: 422
  #   end
  # end

  def update
    if authorized?
      respond_to do |format|
        if @script.update(script_params)
          format.json { render :show, status: :ok, location: api_v1_script_path(@script) }
        else
          format.json { render json: @script.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  # def destroy
  #   if script.destroy
  #     head :no_content
  #   else
  #     render json: { error: script.errors.messages }, status: 422
  #   end
  # end
  def destroy
    if authorized?
      @script.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    else
      handle_unauthorized
    end
  end

  private

  def script_params
    params.require(:script).permit(:name, :user_id)
  end

  def set_script
    @script = Script.find(params[:id])
  end

  def authorized?
    @script.user == current_user
  end

  def handle_unauthorized
    unless authorized?
      respond_to do |format|
        format.json { render :unauthorized, status: 401 }
      end
    end
  end

  # def options # this method includes references to other models - here: scenes
  #   @options ||= { include: %i[scenes] }
  # end
end
