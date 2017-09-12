class AddCityToCampground < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :city, :string
  end
end
