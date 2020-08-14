class RoleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :name, :type, :script_id

  has_many :scenes, through: :scene_roles
end
