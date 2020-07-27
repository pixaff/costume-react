class AddScriptToScenes < ActiveRecord::Migration[6.0]
  def change
    add_reference :scenes, :script, null: false, foreign_key: true
  end
end
