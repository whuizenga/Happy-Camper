import React, { Component } from 'react';
import styled from 'styled-components';

const ForecastContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SunDiv = styled.div`
    height: 8vh;
    width: 8vh;
    background-color: yellow;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 25px orange;
`
const Wrapper = styled.div`
    height: 22vh;
    width: 15vw;
    background: #D1CFC9;
    background: linear-gradient(rgba(178, 237, 255, 0), rgba(178, 237, 255, 1));
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    @media (max-width: 800px){
        width: 66vw;
        margin-top: 25px;
    }
`
const Summary = styled.div`
    p{
        margin: 7px;
    }
`
class FiveDayForecast extends Component {
    render() {
        return (
            <Wrapper>
                <ForecastContainer>
                <SunDiv>
                    {Math.trunc(this.props.forecast.precipProbability*100)}%
                </SunDiv>
                <div>
                    <p>{Math.trunc(this.props.forecast.temperatureHigh)}&deg;F</p>
                    <p>{Math.trunc(this.props.forecast.temperatureLow)}&deg;F</p>
                </div>
                </ForecastContainer>
                <Summary>
                    <p>{this.props.forecast.summary}</p>
                </Summary>
            </Wrapper>
        );
    }
}


export default FiveDayForecast;