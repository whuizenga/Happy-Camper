import React, { Component } from 'react';
import axios from 'axios';

class ShowWeather extends Component {
    conponentWillMount() {
        const lat = this.props.lat;
        const long = this.props.long;
        axios.get(`/campsites/weather?lat=${lat}&long=${long}`).then((res) => {
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                fetching weather for {this.props.lat} {this.props.long}
            </div>
        );
    }
}

export default ShowWeather;