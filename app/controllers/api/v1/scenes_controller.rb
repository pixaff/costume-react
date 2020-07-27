class Api::V1::ScenesController < ApplicationController
  def create
    scene = Scene.new(scene_params)

    if scene.save
      render json: SceneSerializer.new(scene).serialized_json
    else
      render json: { error: scene.errors.messages }, status: 422
    end
  end

  def destroy
    scene = Scene.find(params[:id])

    if scene.destroy
      head :no_content
    else
      render json: { error: scene.errors.messages }, status: 422
    end
  end

  private

  def scene_params
    params.require(:scene).permit(:number, :name, :description, :body, :mood, :place, :notes)
  end
end
