import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const WelcomeContainer = styled.div`
    align-self: center;
    min-height: 20vh;
    min-width: 35vw;
    border: 5px solid #CCB80C;
    background-color: #1B4721;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    h1 {
        font-size: 45px;
        color: #CCB80C;
        margin: 20px 10px;
    }
`

const ContinueAsGuest = styled.p`
    color: white;
`
const LogInButton = styled.div`
    text-align: center;
    background-color: #CCB80C;
    color: #1B4721;
    width: 8vw;
    height: 6vh;
    border: 3px solid #CCB80C;
    border-radius: 3vh;
    margin: 10px;
    :hover {
        border: 3px solid black;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        height: 35px;
        width: 30vw;
        font-size: 35px;
        margin: 7px;
    }
    button {
        width: 20vw;
        height: 35px;
        text-align: center;
        font-size: 30px;
        border: 3px solid #CCB80C;
        border-radius: 4vh;
        background-color: #CCB80C;
        color: #1B4721;
        margin-bottom: 15px;
    }
`

class HomePageWelcome extends Component {
    constructor() {
        super()
        this.state={
            logInPressed: false,
            redirect: false,
        }
    }
    _toggleLoginForm = (event) => {
        event.preventDefault();

        const newState = {...this.state};
        newState.logInPressed = !this.state.logInPressed;
        this.setState(newState);
    }

    _handleLogIn = (event) => {
        event.preventDefault();

        console.log(event.target.email.value);
        console.log(event.target.password.value);
    }
    render() {
        if(this.state.logInPressed){
            return(
                <WelcomeContainer>
                <h1>Happy Camper!</h1>
                <Form onSubmit={this._handleLogIn}>
                    <div>
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                    <div>
                        <button>Log in</button>
                    </div>
                </Form>
                    <ContinueAsGuest>Forgot Password?</ContinueAsGuest>
                </WelcomeContainer>
            );
        } else {
        return (
            <WelcomeContainer>
                <h1>Welcome to Happy Camper!</h1>
                <LogInButton onClick={this._toggleLoginForm}><p>Log in</p></LogInButton>
                <ContinueAsGuest>Continue as guest</ContinueAsGuest>
            </WelcomeContainer>
        );
    }
    }
}

export default HomePageWelcome;