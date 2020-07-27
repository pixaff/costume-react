class ScriptSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :scenes
end
