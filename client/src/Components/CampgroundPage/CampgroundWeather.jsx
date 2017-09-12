import React, { Component } from 'react';

class CampgroundWeather extends Component {
    render() {
        const weather = this.props.weather;
        weather.length = 5;
        console.log(weather)
        return (
            <div>
                This component will give 5 day weather forecast.
            </div>
        );
    }
}

export default CampgroundWeather;