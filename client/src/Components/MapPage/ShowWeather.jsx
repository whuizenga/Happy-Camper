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
    _getWeatherData = () => {
        if(this.state.getData){
            this.setState({getData: false})
            const lat = this.props.lat;
            const long = this.props.long;
            axios.get(`/api/campsites/weather?lat=${lat}&long=${long}`).then((res) => {
                console.log(res.data);
                const newState = {...this.state}
                newState.city = res.data.city;
                this.setState(newState);
            })
    }
    }
    _parseWeatherData = () => {
        //day 1
            // for(i = 0; i < )
        //day 2
        //day 3
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