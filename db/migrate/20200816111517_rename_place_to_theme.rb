class RenamePlaceToTheme < ActiveRecord::Migration[6.0]
  def change
    rename_column :scenes, :place, :theme
  end
end
