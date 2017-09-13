class AddImportantInformationToCampgrounds < ActiveRecord::Migration[5.1]
  def change
    add_column :campgrounds, :important_information, :string
  end
end
