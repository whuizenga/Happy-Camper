import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../HomePage/HomepageFooter';
import SignUpForm from './SignUpForm';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    background-image: url("https://i.imgur.com/M1mjOgL.jpg");
    background-size: cover;
    background-position: center;
    background-filter: blur(2px);
`

const BackDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CCB80C; 
    width: 10vw;
    height: 6vh;
    border: 3px solid #CCB80C;
    border-radius: 4vh;
    margin: 10px;
    box-shadow: 0px 0px 15px black;
    font-family: 'Raleway', sans-serif;
    :hover {
        border: 3px solid #1B4721;
        box-shadow: 0px 0px 20px black;
    }
    a{
        color: #1B4721;
        margin: 0px;
        text-decoration: none;
        font-family: 'Raleway', sans-serif;
    }
    @media (max-width: 800px){
            width: 20vw;
    }
`

class SignUpPage extends Component {
    render() {
        return (
            <Wrapper>
                <BackDiv>
                    <Link to ="/">{"< back"}</Link>
                </BackDiv>
                <SignUpForm />
                <Footer />
            </Wrapper>
        );
    }
}

export default SignUpPage;