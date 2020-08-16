class SceneSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :number, :name, :description, :mood, :theme, :notes, :script_id, :roles

  has_many :roles, through: :scene_roles
end
