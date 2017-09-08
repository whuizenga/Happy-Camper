class CreateCampsites < ActiveRecord::Migration[5.1]
  def change
    create_table :campsites do |t|
      t.string :agency_icon
      t.string :agency_name
      t.boolean :availability_status
      t.string :contract_id
      t.string :contract_type
      t.integer :facility_id
      t.string :facility_name
      t.string :facility_photo
      t.boolean :favorite
      t.float :latitude
      t.boolean :listing_only
      t.float :longitude
      t.string :region_name
      t.string :reservation_channel
      t.string :short_name
      t.boolean :sites_with_amps
      t.boolean :sites_with_pets_allowed
      t.boolean :sites_with_sewer_hookup
      t.boolean :sites_with_water_hookup
      t.boolean :sites_with_water_front
      t.string :state

      t.timestamps
    end
  end
end
