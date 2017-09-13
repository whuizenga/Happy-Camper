import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ShowWeather from './ShowWeather';


class CampgroundItem extends Component {
    constructor() {
        super()
        this.state={
            facilityName: "",
        }
    }
    componentWillMount() {
        console.log(this.props.campground)
        let facilityName = this.props.campground.facilityName;
        facilityName = facilityName.replace("&apos;", "'");
        facilityName = facilityName.toLowerCase();
        this.setState({facilityName});
    }

    _checkCampgroundDataIntegity = () => {
        console.log("clicked")
        axios.put(`/api/campsites/update?lat=${this.props.campground.latitude}&long=${this.props.campground.longitude}&state=${this.props.campground.state}&park_id=${this.props.campground.facilityID}&name=${this.state.facilityName}`).then((res) => {
            console.log("successfully updated information")
        })
    }
    render() {
        const CampgroundDiv = styled.div`
            height: 12vh;
            width: 25vw;
            margin: 3px 0px;
            background-color: white;
        `
        return (
            <div onClick={this._checkCampgroundDataIntegity}>
            <Link to={`/campground/${this.props.campground.latitude}/${this.props.campground.longitude}`}>
            <CampgroundDiv>
                <div>
                    {this.state.facilityName}
                </div>
                <div>
                    <ShowWeather 
                        lat={this.props.campground.latitude}
                        long={this.props.campground.longitude}/>
                 </div>
            </CampgroundDiv>
            </Link>
            </div>
        );
    }
}

export default CampgroundItem;