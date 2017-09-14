import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterDiv = styled.div`
    width: 100vw;
    height: 7vh;
    background-color: #CCB80C;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 15px black;
    font-family: 'Righteous', cursive;
    a {
        color: #1B4721;
        font-size: 20px;
        font-weight: bold;
        margin: 3px 15px;
        text-decoration: none;
    }
`

class HomepageFooter extends Component {
    render() {
        return (
            <FooterDiv>
                <Link to="/about">About Happy Camper!</Link>
            </FooterDiv>
        );
    }
}

export default HomepageFooter;