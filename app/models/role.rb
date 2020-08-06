class Role < ApplicationRecord
  belongs_to :script
  validates :name, presence: true
  validates :name, uniqueness: { scope: :script_id, case_sensitive: false }
  validates :number, uniqueness: { scope: :script_id, case_sensitive: false }
  has_many :scene_roles, dependent: :destroy
  has_many :scenes, through: :scene_roles
end
