class AddShortDescriptionToCampgrounds < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :short_description, :string
  end
end
