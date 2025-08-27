class AddTypesToItems < ActiveRecord::Migration[8.0]
  create_enum :item_type, %w[electronics furniture decoration]

  def change
    add_column :items, :item_type, :enum, enum_type: :item_type
  end
end
