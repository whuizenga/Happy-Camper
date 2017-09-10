import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import styled from 'styled-components';

const MapDiv = styled.div`
    height: 85vh;
    width: 75vw;
`

class GoogleMapContainer extends Component {   
    render() {
        if(!this.props.renderMap){
            return(
                <div>
                    maps are loading...
                </div>
            )
        } else {
        return (
            <MapDiv>
                <GoogleMap
                    bootstrapURLKeys={{key: process.env.REACT_APP_MAPSKEY}}
                    defaultCenter={this.props.defaultCenter}
                    defaultZoom={this.props.defaultZoom}>
                    
                </GoogleMap>
            </MapDiv>
        );
    }
    }
}

export default GoogleMapContainer;