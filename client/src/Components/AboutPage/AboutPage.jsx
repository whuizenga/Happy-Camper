import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to top right, #FFFFCC, white);
    img {
        width: 300px;
    }
    h3 {
        font-family: 'Righteous', cursive;
    }
    p {
        font-family: 'Raleway', sans-serif;
    }
    @media (max-width: 800px){
        height: auto;
    }
    img {
        margin-bottom: 15px;
    }
`

const FAQContainer = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3, p {
        align-self: flex-start;
    }
`
const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60vw;
    justify-content: center;
    align-items: center;
`

class AboutPage extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <FAQContainer>
                    <h3>What is Happy Camper?</h3>
                    <p>Have you ever wanted to go on a spontaneous camping trip but didn't know where to go or what the weather would be like. Have you ever wanted to go on a picnic but didn't know if it would rain?  Happy Camper! has you covered.  With this app you can, at a glance, see nearby locations to enjoy the outdoors!  We give you quick weather data so you can make informed decisions on how to enjoy nature.</p>
                    <h3>How often does the weather data update?</h3>
                    <p>We save weather data on our servers for 4 hours before the data is allowed to update. In this way we minimize the amount of calls we have to make to Darksky, and improve performance for you our user.  Weather shouldn't change that frequenty to require more often weather data than that.</p>
                    <h3>What powers Happy Camper!?</h3>
                    <p>The data we use is proudly provided by Darksky Api, ACTIVE API, and Google maps!</p>
                    <ImageContainer>
                        <img src="https://darksky.net/dev/img/attribution/poweredby-oneline.png" alt="powered by darksky" />
                        <img src="https://i.imgur.com/IxEickW.png" alt="powered by active" />
                        <img src="https://vignette3.wikia.nocookie.net/logopedia/images/9/9a/Google_maps_logo.png/revision/latest?cb=20100703050254" alt="powered by google maps" />
                    </ImageContainer>
                </FAQContainer>
                <Footer />
            </Wrapper>
        );
    }
}

export default AboutPage;