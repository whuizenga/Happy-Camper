import React, { Component } from 'react';
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
        let facilityName = this.props.campground.facilityName;
        facilityName = facilityName.replace("&apos;", "'");
        facilityName = facilityName.toLowerCase();
        this.setState({facilityName});
    }
    render() {
        const CampgroundDiv = styled.div`
            height: 12vh;
            width: 25vw;
            margin: 3px 0px;
            background-color: white;
        `
        return (
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
        );
    }
}

export default CampgroundItem;