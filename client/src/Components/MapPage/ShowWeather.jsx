import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BasicDiv = styled.div `
    p {
        margin: 0;
    }
`

class ShowWeather extends Component {
    constructor(){
        super()
        this.state={
            getData: true,
            weatherData: {},
            city: "",
            dayOne: {},
            dayTwo: {},
            dayThree: {},
        }
    }
    _getWeatherData = () => {
        if(this.state.getData){
            this.setState({getData: false})
            const lat = this.props.lat;
            const long = this.props.long;
            axios.get(`/api/campsites/weather?lat=${lat}&long=${long}`).then((res) => {
                const newState = {...this.state}
                newState.city = res.data.city;
                this._parseWeatherData(res.data.weather)
                this.setState(newState);
            })
        }
    }
    _parseWeatherData = (weather) => {
        console.log(weather.daily.data[0])
        const dayOneWeather = weather.daily.data[0];
        const dayTwoWeather = weather.daily.data[1];
        const dayThreeWeather = weather.daily.data[2];
        const newState = {...this.state}
        newState.dayOne.high = Math.trunc(dayOneWeather.temperatureHigh);
        newState.dayOne.low = Math.trunc(dayOneWeather.temperatureLow);
        newState.dayOne.precip = dayOneWeather.precipProbability;
        newState.dayTwo.high = Math.trunc(dayTwoWeather.temperatureHigh);
        newState.dayTwo.low = Math.trunc(dayTwoWeather.temperatureLow);
        newState.dayTwo.precip = dayTwoWeather.precipProbability;
        newState.dayThree.high = Math.trunc(dayThreeWeather.temperatureHigh);
        newState.dayThree.low = Math.trunc(dayThreeWeather.temperatureLow);
        newState.dayThree.precip = dayThreeWeather.precipProbability;
        this.setState(newState);
        console.log(this.state)
    }
    render() {
        this._getWeatherData();
        return (
            <BasicDiv>
                <p>{this.state.city}</p>
                <p>fetching weather for {this.props.lat} {this.props.long}</p>
            </BasicDiv>
        );
    }
}

export default ShowWeather;