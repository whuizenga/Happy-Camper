import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    height: 8vh;
    width: 100vw;
    background: #1B4721;
    color: #CCB80C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 15px black;
    h1{
        margin: 0px 50px;
        text-shadow: 0px 0px 15px black;
        font-family: 'Righteous', cursive;
    }
    a{
        color: #CCB80C;
        margin: 0px 50px;
        text-decoration: none;
        text-shadow: 0px 0px 15px black;
        font-family: 'Raleway', sans-serif;
    }
    a:hover {
        color: white;
    }
    @media (max-width: 800px){
        h1 {
            font-size: 25px;
            margin: 0px 10px;
        }
        a {
            margin: 0px 10px;
        }
`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <a href="/">{"< back"}</a>
                <h1>About Happy Camper!</h1>
            </HeaderWrapper>
        );
    }
}

export default Header;