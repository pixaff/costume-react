class SceneSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :number, :name, :description, :mood, :set, :play_day, :notes, :script_id, :roles

  has_many :roles, through: :scene_roles
end
