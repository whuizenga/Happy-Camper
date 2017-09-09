import React, { Component } from 'react';
import styled from 'styled-components';

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
    :hover {
        border: 3px solid #1B4721
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
    render() {
        if (this.state.loggedIn){
            return (
                <SignUpDiv>
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