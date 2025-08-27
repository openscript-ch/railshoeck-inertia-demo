class CreateItems < ActiveRecord::Migration[8.0]
  def change
    create_table :items do |t|
      t.string :name
      t.date :acquisition
      t.float :price

      t.timestamps
    end
  end
end
