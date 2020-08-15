class Api::V1::RolesController < ApplicationController
  def create
    role = script.roles.new(role_params)
    if no_error?(role)
      if role.save
        render json: RoleSerializer.new(role).serialized_json
      else
        render json: { error: role.errors.messages }, status: 422
        # render json: { error: role.errors.messages[:name] }, status: 423
      end
    else
      render json: { error: "Custom message - name must be unique" }, status: 422
      # render json: { status: "error", code: 4000, message: "item_id is required to make a purchase" }
      # render json: 'Name needs to be unique'.to_json
    end
  end

  def destroy
    role = Role.find(params[:id])

    if role.destroy
      head :no_content
    else
      render json: { error: role.errors.messages }, status: 422
    end
  end

  private

  def no_error?(role)
    true
    # role.where(name: role.name, script_id: role.script_id).empty?
  end

  def script
    @script = Script.find(params[:script_id])
  end

  def role_params
    params.require(:role).permit(:number, :name, :role_type)
  end
end
