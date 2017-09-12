class CreateCampgrounds < ActiveRecord::Migration[5.1]
  def change
    create_table :campgrounds do |t|
      t.string :description
      t.string :name
      t.string :latitude
      t.string :longitude
      t.json :weather

      t.timestamps
    end
  end
end
