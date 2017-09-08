# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Campsite.destroy_all

require 'HTTParty'

@xml = HTTParty.get("http://api.amp.active.com/camping/campgrounds?pstate=GA&api_key=#{ENV['CAMPGROUNDKEY']}")
response = Hash.from_xml(@xml.body)
jsonres = response.to_json  

puts "done"