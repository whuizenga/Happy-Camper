import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchBar from './SearchBar';

const HeaderContainer = styled.div`
    width: 100vw;
    height: 8vh;
    background-color: #1B4721;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 15px black;
    a {
        color: #CCB80C;
        text-decoration: none;
        font-family: 'Raleway', sans-serif;
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
                <SearchBar />
                <LinksContainer>
                    {localStorage["access-token"] ? <Link to="/profile">User Profile</Link> : null}
                    {localStorage["access-token"] ? <Link to="/">Log out</Link> : <Link to="/login">Log in</Link>}
                </LinksContainer>
            </HeaderContainer>
        );
    }
}

export default MapPageHeader;