import React, { Component } from 'react';
import styled from 'styled-components';

import FiveDayForecast from './FiveDayForecast';

const Wrapper = styled.div`
    height: 44vh;
    width: 100vw;
    font-family: 'Raleway', sans-serif;
    background: linear-gradient(to bottom right, #FFFFCC, white);
    h1 {
        font-family: 'Righteous', cursive;
    }
`
const DailyWeatherContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const DarkSky = styled.div`
    border-radius: 10px 30px;
    padding: 8px;
    background: black;
    background: linear-gradient(to bottom right, #2170AE, #333333, #2170AE);
    width: 10vw;
    text-align: center;
    box-shadow: 0px 0px 15px black;
    margin: 10px;
    :hover{
        background: linear-gradient(to bottom right, purple, black, purple);
    }
    `
    
const CenterDiv = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        a{
            color: white;
            text-decoration: none;
        }
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
                <CenterDiv>
                    Get more detailed information at
                    <a href={`https://darksky.net/forecast/${this.props.lat},${this.props.long}/us12/en`} target="_blank"><DarkSky>Dark Sky</DarkSky></a>
                </CenterDiv>  
            </Wrapper>
            );
        }
    }
    
CampgroundWeather.defaultProps ={
    weather: []
}
export default CampgroundWeather;