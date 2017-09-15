import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { deleteSession } from '../../util.js';

const SignUpWrapper = styled.div`
    align-self: flex-end; 
    a {
        color: #1B4721;
        text-decoration: none;
    }
`
const SignUpDiv = styled.div`
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
    @media (max-width: 800px){
        width: 20vw;
    }
`

class SignUpButton extends Component {
    constructor() {
        super()
        this.state={
            loggedIn: false,
            redirect: false,
        }
    }
    componentWillMount() {
        if (localStorage.getItem("access-token")){
            const newState = {...this.state};
            newState.loggedIn = true;
            this.setState(newState);
        }
    }

    _handleLogOut = ()=> {
        axios.delete("/auth/sign_out").then((res) => {
            console.log("user signed out")
            deleteSession();
            this.setState({redirect: true, loggedIn: false});
        }).catch((err) => {
            console.log("Couldn't log out")
            console.log(err)
            deleteSession();
            this.setState({redirect: true, loggedIn: false});
        })
    }
    render() {
        if (this.state.redirect && this.state.loggedIn){
            return (<Redirect to="/" />)
        } 
        if (this.state.loggedIn){
            return (
                <SignUpDiv onClick={this._handleLogOut}>
                    <p>Log out</p>
                </SignUpDiv>
            )
        } else {
        return (
            <SignUpWrapper>
                <Link to="/signup">
                    <SignUpDiv>
                        <p>Sign Up!</p>
                    </SignUpDiv>
                </Link>
            </SignUpWrapper>
        );
    }
    }
}

export default SignUpButton;