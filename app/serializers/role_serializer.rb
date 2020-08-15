class RoleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :number, :name, :role_type, :script_id, :scenes

  has_many :scenes, through: :scene_roles
end
