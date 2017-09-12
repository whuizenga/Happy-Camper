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
        @campground = Campground.find_by(latitude: lat, longitude: long)
        
        if @campground.nil?
            @campground = Campground.create(latitude: lat, longitude: long)
        end

        if @campground.city.nil?
            response = HTTParty.get("http://api.openweathermap.org/data/2.5/forecast?lat=#{lat}&lon=#{long}&appid=#{ENV["WEATHERKEY"]}")
            city = response["city"]["name"]
            puts response["city"]["name"]
            @campground.city = city
        end

        # response = HTTParty.get("")
        render json: @campground
    end
end
