require 'HTTParty'
class Api::CampsitesController < ApplicationController
    def index
        lat = params[:lat]
        long = params[:long]
        @xml = HTTParty.get("http://api.amp.active.com/camping/campgrounds?landmarkName=true&landmarkLat=#{lat}&landmarkLong=#{long}&api_key=#{ENV["CAMPGROUNDKEY"]}")
        response = Hash.from_xml(@xml.body) 
        render json: response
    end

    def show
        lat = params[:lat]
        long = params[:long]
        message = "received params #{lat} and #{long}"
        render json: {
            "message": message
        }
    end
end
