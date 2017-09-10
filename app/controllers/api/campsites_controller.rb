require 'HTTParty'
class Api::CampsitesController < ApplicationController
    def index
        lat = params[:lat]
        long = params[:long]
        puts lat
        puts long
        render json: {
            "message": "success?"
        }
        # http://api.amp.active.com/camping/campgrounds?landmarkName=true&landmarkLat=33.77396&landmarkLong=-84.377415&xml=true&api_key=pe95bp8bdx9mk3d4ycgydg9v
        # @xml = HTTParty.get("http://api.amp.active.com/camping/campgrounds?pstate=GA&api_key=#{ENV['CAMPGROUNDKEY']}")
        # response = Hash.from_xml(@xml.body) 
    end
end
