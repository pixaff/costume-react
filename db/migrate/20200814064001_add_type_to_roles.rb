class AddTypeToRoles < ActiveRecord::Migration[6.0]
  def change
    add_column :roles, :type, :string
  end
end
