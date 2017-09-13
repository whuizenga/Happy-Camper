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
            @campground.city = city
            @campground.save!
        end

        time = Time.new
        
        if @campground.weather.nil? || time-@campground.updated_at > 4*3600
            weather = HTTParty.get("https://api.darksky.net/forecast/#{ENV["DARKSKY"]}/#{lat},#{long}")
            @campground.weather = weather
            @campground.save!
        end
        
        render json: @campground
    end
end
