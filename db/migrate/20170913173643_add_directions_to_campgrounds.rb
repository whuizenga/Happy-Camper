class AddDirectionsToCampgrounds < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :directions, :string
  end
end
