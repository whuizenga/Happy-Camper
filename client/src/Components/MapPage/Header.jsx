import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100vw;
    height: 8vh;
    background-color: #1B4721;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        color: #CCB80C;
        text-decoration: none;
    }
`

const LinksContainer = styled.div`
    width: 30vw;
    a{
        margin: 0px 50px;
    }
`

class MapPageHeader extends Component {
    render() {
        return (
            <HeaderContainer>
                Search Component
                <LinksContainer>
                    <Link to="/profile">User Profile</Link>
                    <Link to="/">Log out</Link>
                </LinksContainer>
            </HeaderContainer>
        );
    }
}

export default MapPageHeader;