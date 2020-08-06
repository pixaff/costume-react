class Script < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  has_many :scenes, dependent: :destroy
  has_many :roles, dependent: :destroy
end
