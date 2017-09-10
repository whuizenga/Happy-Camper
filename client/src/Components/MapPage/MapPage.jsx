import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import CampgroundList from './CampgroundList';
import GoogleMap from './GoogleMap';

const CampgroundContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    height: 84vh;
`

class MapPage extends Component {
    constructor(){
        super()
        this.state={
            defaultCenter: {},
            defaultZoom: 8,
            renderMap: false,
        }
    }
    componentWillMount() {
        const geolocation = navigator.geolocation;
        if(!geolocation){
            alert("unable to resolve current location");
        }
        geolocation.getCurrentPosition((position) => {
            const newState = {...this.state};
            const currentLongitude = position.coords.longitude;
            const currentLatitude = position.coords.latitude;
            newState.defaultCenter = {lat: currentLatitude, lng: currentLongitude}
            newState.renderMap = true;
            this.setState(newState);
            console.log(this.state);
        });
    }
    render() {
        return (
            <div>
                <Header />

                <CampgroundContainer>
                    <CampgroundList />
                    <GoogleMap 
                        defaultCenter={this.state.defaultCenter}
                        defaultZoom={this.state.defaultZoom}
                        renderMap={this.state.renderMap}/>
                </CampgroundContainer>

                <Footer />
            </div>
        );
    }
}

export default MapPage;