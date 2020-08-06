class CreateRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :roles do |t|
      t.integer :number
      t.string :name
      t.text :notes
      t.string :connection
      t.references :script, null: false, foreign_key: true

      t.timestamps
    end
  end
end
