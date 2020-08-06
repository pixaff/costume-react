class Script < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :name, uniqueness: { scope: :user_id, case_sensitive: false }
  has_many :scenes, dependent: :destroy
  has_many :roles, dependent: :destroy
end
