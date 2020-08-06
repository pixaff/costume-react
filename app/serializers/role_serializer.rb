class RoleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :name, :script_id

  has_many :scenes, through: :scene_roles
end
