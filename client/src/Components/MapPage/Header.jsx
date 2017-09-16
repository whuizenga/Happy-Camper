import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { deleteSession } from '../../util.js';

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
    a:hover {
        color: white;
    }
    @media (max-width: 800px){
        width: 50vw;
        a {  
            margin: 5px;
        }
    }
`

class MapPageHeader extends Component {
    constructor() {
        super()
        this.state ={
            redirect: false
        }
    }
    _handleLogOut = ()=> {
        axios.delete("/auth/sign_out").then((res) => {
            console.log("user signed out")
            deleteSession();
            this.setState({redirect: true});
        }).catch((err) => {
            console.log("Couldn't log out")
            console.log(err)
            deleteSession();
            this.setState({redirect: true});
        })
    }
    render() {
        if (this.state.redirect){
            return(<Redirect to="/" />);
        }
        return (
            <HeaderContainer>
                <SearchBar />
                <LinksContainer>
                    {localStorage["access-token"] ? <Link to="/profile">User Profile</Link> : null}
                    {localStorage["access-token"] ? <a onClick={this._handleLogOut} href="/">Log out</a> : <Link to="/login">Log in</Link>}
                </LinksContainer>
            </HeaderContainer>
        );
    }
}

export default MapPageHeader;