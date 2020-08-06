class SceneRole < ApplicationRecord
  belongs_to :scene
  belongs_to :role
  validates_uniqueness_of :role, scope: :scene
end
