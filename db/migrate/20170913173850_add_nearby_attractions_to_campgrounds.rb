class AddNearbyAttractionsToCampgrounds < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :nearby_attractions, :string
  end
end
