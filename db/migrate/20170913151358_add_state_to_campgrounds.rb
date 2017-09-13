class AddStateToCampgrounds < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :state, :string
  end
end
