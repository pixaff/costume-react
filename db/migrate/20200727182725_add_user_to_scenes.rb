class AddUserToScenes < ActiveRecord::Migration[6.0]
  def change
    add_reference :scenes, :user, null: false, foreign_key: true
  end
end
