import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import SignUpButton from './HomePageSignup';
import Welcome from './HomepageWelcome';
import Footer from './HomepageFooter';

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    background-image: url("https://i.imgur.com/M1mjOgL.jpg");
    background-size: cover;
    background-filter: blur(2px);
`

class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
                <SignUpButton />

                <Welcome />

                <Footer />
            </HomePageContainer>
        );
    }
}

export default HomePage;