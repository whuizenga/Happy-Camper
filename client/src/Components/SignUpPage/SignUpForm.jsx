import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const SignUpContainer = styled.div`
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
    box-shadow: 0px 0px 25px black;
    h1 {
        font-size: 45px;
        color: #CCB80C;
        margin: 20px 10px;
        text-shadow: 1px 1px 15px black;
        font-family: 'Righteous', cursive;
    }
    a {
        text-decoration: none;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    input{
        height: 35px;
        width: 30vw;
        font-size: 35px;
        margin: 7px;
        box-shadow: 0px 0px 15px black;
        font-family: 'Raleway', sans-serif;
    }
    button {
        width: 20vw;
        height: 40px;
        text-align: center;
        font-size: 30px;
        border: 3px solid #CCB80C;
        border-radius: 4vh;
        background-color: #CCB80C;
        color: #1B4721;
        margin: 15px 0px;
        box-shadow: 0px 0px 15px black;
        font-family: 'Raleway', sans-serif;
    }
    button:hover{
        border 3px solid #1B4721;
}
`
class SignUpForm extends Component {
    _handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <SignUpContainer>
                <h1>Be A Happy Camper!</h1>
                <Form onSubmit={this._handleSubmit}>
                    <div>
                        <input name="email" type="email" placeholder="email" />
                    </div>
                    <div>
                        <input name="password" type="password" placeholder="password" />
                    </div>
                    <div>
                        <input name="password_confirmation" type="password" placeholder="confirm password" />
                    </div>
                    <div>
                        <button>Sign up</button>
                    </div>
                </Form>
            </SignUpContainer>
        );
    }
}

export default SignUpForm;