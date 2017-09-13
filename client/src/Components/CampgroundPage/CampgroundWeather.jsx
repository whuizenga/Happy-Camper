import React, { Component } from 'react';
import styled from 'styled-components';

const DailyWeatherContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const DailyWeatherDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
    width: 15vw;
`

class CampgroundWeather extends Component {
    render() {
        const SunDiv = styled.div`
            background-color: yellow;
            border-radius: 100%;
            height: 15vh;
            width: 15vh;
            display: flex;
            justify-content: center;
            align-items: center;
        `

        const weather = this.props.weather;
        weather.length = 5;
        console.log(weather)
            return (
            <div>
                <h1>5-day weather forecast</h1>
                <hr />
                <DailyWeatherContainer>
                    <DailyWeatherDiv>
                        Day 1
                        <SunDiv>
                            {weather[0] ? <p>{weather[0].precipProbability*100+"%"}</p> : null }
                        </SunDiv>
                        <div>
                            {weather[0] ? <p>{Math.trunc(weather[0].temperatureHigh)}&deg;F</p> : null }
                            {weather[0] ? <p>{Math.trunc(weather[0].temperatureLow)}&deg;F</p> : null }
                        </div>
                    </DailyWeatherDiv>
                    <DailyWeatherDiv>
                        Day 2
                        <SunDiv>
                            {weather[1] ? <p>{weather[1].precipProbability*100+"%"}</p> : null }
                        </SunDiv>
                        <div>
                            {weather[1] ? <p>{Math.trunc(weather[1].temperatureHigh)}&deg;F</p> : null }
                            {weather[1] ? <p>{Math.trunc(weather[1].temperatureLow)}&deg;F</p> : null }
                        </div>
                    </DailyWeatherDiv>
                    <DailyWeatherDiv>
                        Day 3
                        <SunDiv>
                            {weather[2] ? <p>{weather[2].precipProbability*100+"%"}</p> : null }
                        </SunDiv>
                        <div>
                            {weather[2] ? <p>{Math.trunc(weather[2].temperatureHigh)}&deg;F</p> : null }
                            {weather[2] ? <p>{Math.trunc(weather[2].temperatureLow)}&deg;F</p> : null }
                        </div>
                    </DailyWeatherDiv>
                    <DailyWeatherDiv>
                        Day 4
                        <SunDiv>
                            {weather[3] ? <p>{weather[3].precipProbability*100+"%"}</p> : null }
                        </SunDiv>
                        <div>
                            {weather[3] ? <p>{Math.trunc(weather[3].temperatureHigh)}&deg;F</p> : null }
                            {weather[3] ? <p>{Math.trunc(weather[3].temperatureLow)}&deg;F</p> : null }
                        </div>
                    </DailyWeatherDiv>
                    <DailyWeatherDiv>
                        Day 5
                        <SunDiv>
                            {weather[4] ? <p>{weather[4].precipProbability*100+"%"}</p> : null }
                        </SunDiv>
                        <div>
                            {weather[4] ? <p>{Math.trunc(weather[4].temperatureHigh)}&deg;F</p> : null }
                            {weather[4] ? <p>{Math.trunc(weather[4].temperatureLow)}&deg;F</p> : null }
                        </div>
                    </DailyWeatherDiv>
                </DailyWeatherContainer>
            </div>
            );
        }
    }

export default CampgroundWeather;