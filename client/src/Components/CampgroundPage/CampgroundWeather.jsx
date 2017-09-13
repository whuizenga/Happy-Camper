import React, { Component } from 'react';
import styled from 'styled-components';

import FiveDayForecast from './FiveDayForecast';

const Wrapper = styled.div`
    height: 44vh;
    width: 100vw;
`
const DailyWeatherContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

class CampgroundWeather extends Component {
    render() {
        const weather = this.props.weather;
        weather.length = 5;
            return (
            <Wrapper>
                <h1>5-day weather forecast</h1>
                <hr />
                <DailyWeatherContainer>
                {weather.map((forecast, i) => {
                    return <FiveDayForecast  key={i} forecast={forecast} />
                })}
                </DailyWeatherContainer>
                Get more detailed information at
                <a href={`https://darksky.net/forecast/${this.props.lat},${this.props.long}/us12/en`}>Dark Sky</a>  
            </Wrapper>
            );
        }
    }
    
CampgroundWeather.defaultProps ={
    weather: []
}
export default CampgroundWeather;