import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import styled from 'styled-components';

import Marker from './Marker';

const MapDiv = styled.div`
    height: 84vh;
    width: 75vw;
    @media (max-width: 1000px){
        display: none;
    }
`

const MapGifDiv = styled.div`
    height: 84vh;
    width: 75vw;
    diplay: flex;
    justify-content: center;
    align-items: center;
    img {
        align-self: center;
        width: 75vw;
        margin: 8vh 0px;
    }
    @media (max-width: 800px){
        display: none;
    }
`

class GoogleMapContainer extends Component {   
    render() {
        if(!this.props.renderMap){
            return(
                <MapGifDiv>
                    <img src="https://media.giphy.com/media/kxhY6bj6JA7Qs/giphy.gif" alt="map is loading"/>
                </MapGifDiv>
            )
        } else {
            return (
                <MapDiv>
                    <GoogleMap
                        bootstrapURLKeys={{key: process.env.REACT_APP_MAPSKEY}}
                        defaultCenter={this.props.defaultCenter}
                        defaultZoom={this.props.defaultZoom}>
                        {this.props.campgroundList.map((campground, i) => {
                            return <Marker key={i} lat={campground.latitude} lng={campground.longitude} />
                        })}
                    </GoogleMap>
                </MapDiv>
            );
        }
    }
}

export default GoogleMapContainer;