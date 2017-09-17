import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
            campgroundList: [],
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
            this.setState(newState);
            axios.get(`/api/campsites?lat=${currentLatitude}&long=${currentLongitude}`).then( async (res) => {
                const newState={...this.state}
                newState.campgroundList = res.data.resultset.result
                //Limit the number of returns for now so I don't get blocked again.
                newState.campgroundList.length = 50;
                await this._addHoverToCampgroundList(newState.campgroundList)
                console.log("async");
                newState.renderMap = true;
                this.setState(newState);
            })
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.renderMap){
            return false
        } else {
            return true
        }
    }
    _addHoverToCampgroundList = async (campgroundList) => {
        await campgroundList.forEach((campground) => {
            return campground.hover = false;
        })
        console.log(campgroundList[0])
        return campgroundList;
    }
    _setHover = (index) => {
        if(this.state.renderMap){
        const newState = {...this.state}
        newState.campgroundList[index].hover = !newState.campgroundList[index].hover
        // console.log(`set state of ${index} to ${newState.campgroundList[index].hover}`)
        this.setState(newState);
        }
    }
    render() {
        return (
            <div>
                <Header />

                <CampgroundContainer>
                    <CampgroundList 
                        campgroundList={this.state.campgroundList}
                        toggleHover={this._setHover}/>
                    <GoogleMap 
                        defaultCenter={this.state.defaultCenter}
                        defaultZoom={this.state.defaultZoom}
                        renderMap={this.state.renderMap}
                        campgroundList={this.state.campgroundList}
                        toggleHover={this._setHover}/>
                </CampgroundContainer>

                <Footer />
            </div>
        );
    }
}

export default MapPage;