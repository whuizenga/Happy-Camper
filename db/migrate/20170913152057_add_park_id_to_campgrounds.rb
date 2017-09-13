class AddParkIdToCampgrounds < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :park_id, :string
  end
end
