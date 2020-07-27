class Script < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  has_many :scenes, dependent: :destroy
end
