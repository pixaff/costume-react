class SceneSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :name, :description, :mood, :place, :notes, :script_id, :roles

  has_many :roles, through: :scene_roles
end
