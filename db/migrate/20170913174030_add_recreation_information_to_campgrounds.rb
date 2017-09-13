class AddRecreationInformationToCampgrounds < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :recreation_information, :string
  end
end
