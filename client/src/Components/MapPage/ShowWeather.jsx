import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BasicDiv = styled.div `
    p {
        font-size: 15px;
        margin: 0;
    }
`
const WeatherDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%
`
const DailyWeatherDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    componentWillMount() {
        this._getWeatherData();
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
    }
    _divColor = (precip) => {
        if (precip >= 0.8){
            return "#585755"
        }
        else if (precip < 0.8 && precip >= 0.5){
            return "#81807D"
        }
        else if (precip < 0.5 && precip >= 0.2){
            return "#D1CFC9"
        }
        else {
            return "#CCB80C"
        }
    }
    render() {
        const DayOneDiv = styled.div`
            background-color: ${this._divColor(this.state.dayOne.precip)};
            border-radius: 100%;
            height: 7vh;
            width: 7vh;
            display: flex;
            justify-content: center;
            align-items: center;
        `
        const DayTwoDiv = styled.div`
            background-color: ${this._divColor(this.state.dayTwo.precip)};
            border-radius: 100%;
            height: 7vh;
            width: 7vh;
            display: flex;
            justify-content: center;
            align-items: center;
        `
        const DayThreeDiv = styled.div`
            background-color: ${this._divColor(this.state.dayThree.precip)};
            border-radius: 100%;
            height: 7vh;
            width: 7vh;
            display: flex;
            justify-content: center;
            align-items: center;
        `
        return (
            <BasicDiv>
                <p>{this.state.city}</p>
                <WeatherDiv>
                    <DailyWeatherDiv>
                        <DayOneDiv>
                            {Math.trunc(this.state.dayOne.precip*100)+"%"}
                        </DayOneDiv>
                        <div>
                            <p>{this.state.dayOne.high}&deg;F</p>
                            <p>{this.state.dayOne.low}&deg;F</p>
                        </div>
                    </DailyWeatherDiv>
                    <DailyWeatherDiv>
                        <DayTwoDiv>
                            {Math.trunc(this.state.dayTwo.precip*100)+"%"}
                        </DayTwoDiv>
                        <div>
                            <p>{this.state.dayTwo.high}&deg;F</p>
                            <p>{this.state.dayTwo.low}&deg;F</p>
                        </div>
                    </DailyWeatherDiv>
                    <DailyWeatherDiv>
                        <DayThreeDiv>
                            {Math.trunc(this.state.dayThree.precip*100)+"%"}
                        </DayThreeDiv>
                        <div>
                            <p>{this.state.dayThree.high}&deg;F</p>
                            <p>{this.state.dayThree.low}&deg;F</p>
                        </div>
                    </DailyWeatherDiv>
                </WeatherDiv>
            </BasicDiv>
        );
    }
}

export default ShowWeather;