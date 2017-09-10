import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import { saveAuthTokens } from '../../util.js';

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
    text-decoration: none;
`
const LogInButton = styled.div`
    text-align: center;
    background-color: #CCB80C;
    color: #1B4721;
    min-width: 8vw;
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
            loggedIn : false,
        }
    }
    componentWillMount() {
        this.setState({redirect: false});
        if (localStorage.getItem("access-token")){
            const newState = {...this.state};
            newState.loggedIn = true;
            this.setState(newState);
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
        const payload = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        axios.post('/auth/sign_in', payload).then((res) => {
            const headers = res.headers;
            saveAuthTokens(headers);
            this.setState({redirect: true});
        })
    }

    _toggleRedirect = () => {
        this.setState({redirect: true});
    }
    render() {
        if(this.state.redirect){
            return (<Redirect to ="/map"/>)
        }
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
                
                {this.state.loggedIn ?
                    <Link to="/map"><LogInButton><p>Continue to Happy Camper</p></LogInButton></Link> :
                    <LogInButton onClick={this._toggleLoginForm}><p>Log in</p></LogInButton>
                }
                {this.state.loggedIn ? null :
                    <Link to="/map"><ContinueAsGuest>Continue as guest</ContinueAsGuest></Link>
                }
            </WelcomeContainer>
        );
    }
    }
}

export default HomePageWelcome;