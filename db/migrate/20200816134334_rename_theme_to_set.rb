class RenameThemeToSet < ActiveRecord::Migration[6.0]
  def change
    rename_column :scenes, :theme, :set
  end
end
