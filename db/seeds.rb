# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Campsite.destroy_all

require 'HTTParty'

@xml = HTTParty.get("http://api.amp.active.com/camping/campgrounds?pstate=GA&api_key=")
response = Hash.from_xml(@xml.body)  

response["resultset"]["result"].each do |res|
    Campsite.new(
        "agency_icon"
        "agency_name"
        "availability_status"
        "contract_id"
        "contract_type"
        "facility_id"
        "facility_name"
        "facility_photo"
        "favorite"
        "latitude"
        "listing_only"
        "longitude"
        "region_name"
        "reservation_channel"
        "short_name"
        "sites_with_amps"
        "sites_with_pets_allowed"
        "sites_with_sewer_hookup"
        "sites_with_water_hookup"
        "sites_with_water_front"
    )