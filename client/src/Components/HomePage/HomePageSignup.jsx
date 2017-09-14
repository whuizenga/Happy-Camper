import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignUpDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CCB80C;
    color: #1B4721;
    width: 10vw;
    height: 6vh;
    border: 3px solid #CCB80C;
    border-radius: 4vh;
    margin: 10px;
    align-self: flex-end;
    box-shadow: 0px 0px 15px black;
    :hover {
        border: 3px solid #1B4721;
        box-shadow: 0px 0px 20px black;
    }
`

class SignUpButton extends Component {
    constructor() {
        super()
        this.state={
            loggedIn: false
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
            localStorage.clear();
        }).catch((err) => {
            console.log("Couldn't log out")
            console.log(err)
        })
    }
    render() {
        if (this.state.loggedIn){
            return (
                <SignUpDiv onClick={this._handleLogOut}>
                    <p>Log out</p>
                </SignUpDiv>
            )
        } else {
        return (
            <SignUpDiv>
                <p>Sign Up!</p>
            </SignUpDiv>
        );
    }
    }
}

export default SignUpButton;