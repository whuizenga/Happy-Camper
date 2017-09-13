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
    background-color: #CCB80C;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

class FiveDayForecast extends Component {
    render() {
        return (
            <div>
                <ForecastContainer>
                <SunDiv>
                    {Math.trunc(this.props.forecast.precipProbability*100)}%
                </SunDiv>
                <div>
                    <p>{Math.trunc(this.props.forecast.temperatureHigh)}&deg;F</p>
                    <p>{Math.trunc(this.props.forecast.temperatureLow)}&deg;F</p>
                </div>
                </ForecastContainer>
                <div>
                    <p>{this.props.forecast.summary}</p>
                </div>
            </div>
        );
    }
}


export default FiveDayForecast;