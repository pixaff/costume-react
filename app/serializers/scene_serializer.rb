class SceneSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :name, :description, :mood, :place, :notes, :script_id
end
