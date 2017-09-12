import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from '../MapPage/Header.jsx';
import Footer from '../MapPage/Footer.jsx';
import CampgroundDescription from './CampgroundDescription.jsx';
import CampgroundWeather from './CampgroundWeather.jsx';

const CampgroundContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
class CampgroundPage extends Component {
    componentWillMount() {
        const lat = this.props.match.params.lat;
        const long = this.props.match.params.long;
        axios.get(`/api/campsites/weather?lat=${lat}&long=${long}`).then((res) => {
            console.log(res.data);
    });
}
    render() {
        return (
            <CampgroundContainer>
                <Header />
                <CampgroundDescription />
                <CampgroundWeather />
                <Footer />
            </CampgroundContainer>
        );
    }
}

export default CampgroundPage;