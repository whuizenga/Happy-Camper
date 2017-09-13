class AddAlertToCampgrounds < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :alert, :string
  end
end
