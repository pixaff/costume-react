class AddColumnsToScenes < ActiveRecord::Migration[6.0]
  def change
    add_column :scenes, :play_day, :integer
    add_column :scenes, :continuity, :string
  end
end
