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
        @aged = false;
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
            @aged = true;
            weather = HTTParty.get("https://api.darksky.net/forecast/#{ENV["DARKSKY"]}/#{lat},#{long}")
            @campground.weather = weather
            @campground.save!
        end
        
        
        render json: @campground
    end
    
    def update
        lat = params[:lat]
        long = params[:long]
        state = params[:state]
        park_id = params[:park_id]
        name = params[:name]
        @campground = Campground.find_by(latitude: lat, longitude: long)
        
        if @campground.state.nil?
            @campground.state = state.upcase   
            @campground.save!;
        end
        
        if @campground.park_id.nil?
            @campground.park_id = park_id
            @campground.save!
        end
        
        puts name.titleize
        
        if @campground.name.nil?
            @campground.name = name.titleize
            @campground.save!
        end
        
        if @campground.park_id && @campground.state
            xml = HTTParty.get("http://api.amp.active.com/camping/campground/details?contractCode=#{@campground.state}&parkId=#{@campground.park_id}&api_key=#{ENV["CAMPGROUNDKEY"]}")
            
            html = xml.body.include? "<!DOCTYPE html>"

            if html
                puts "Ahh fuck, html"
            else
                puts "yay! no html"
                response = Hash.from_xml(xml.body)
                @campground.description = response["detailDescription"]["description"] || ""
                @campground.alert = response["detailDescription"]["alert"] || ""
                @campground.directions = response["detailDescription"]["drivingDirection"] || ""
                @campground.short_description = response["detailDescription"]["facilitiesDescription"] || ""
                @campground.important_information = response["detailDescription"]["importantInformation"] || ""
                @campground.nearby_attractions = response["detailDescription"]["nearbyAttrctionDescription"] || ""
                @campground.recreation_information = response["detailDescription"]["recreationDescription"] || ""
                @campground.reservation_url = response["detailDescription"]["reservationUrl"] || "http://www.reserveamerica.com/campsiteSearch.do?contractCode=#{@campground.state}&parkId=#{@campground.park_id}"
                @campground.save!
            end
    
        end
            render json: {
                "message": "updated"
            }

    end
end