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
        }
    }
    _getWeatherData(){
        if(this.state.getData){
            this.setState({getData: false})
            const lat = this.props.lat;
            const long = this.props.long;
            axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHERKEY}`).then((res) => {
                const newState = {...this.state}
                newState.city = res.data.city.name;
                newState.weather = res.data.list;
                this.setState(newState);
                console.log(newState);
        })
    }
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