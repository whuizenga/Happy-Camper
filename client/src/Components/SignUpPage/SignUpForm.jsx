import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { setAxiosHeaders } from '../../util.js';

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
    @media (max-width: 800px){
        h1{
            font-size: 35px;
        }
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
    @media (max-width: 800px){
        input {
            width: 75vw;
        }
        button {
            width: 50vw;
        }
    }
`
const ErrorMessage = styled.p`
    margin: 5px;
    color: red;
    font-weight: bold;
`
class SignUpForm extends Component {
    constructor(){
        super()
        this.state = {
            redirect: false,
            message: []
        }
    }

    _handleSubmit= (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const passConfirm = event.target.password_confirmation.value;
        if (password === passConfirm){
            const payload = {
                email: email,
                password: password,
                password_confirmation: passConfirm
            }
            axios.post('/auth', payload).then((res) => {
                setAxiosHeaders(res.headers);
                const newState = {...this.state}
                newState.redirect = true;
                this.setState(newState);
            }).catch((err) => {
                console.log(err.response.data.errors.full_messages);
                let errors = err.response.data.errors.full_messages;
                errors = errors.splice(1, 2);
                this.setState({message: errors})
            })
        } else {
            this.setState({message: ["passwords do not match"]});
        }
    }
    render() {
        if(this.state.redirect){
            return(<Redirect to="/map" />)
        } else {
        return (
            <SignUpContainer>
                <h1>Be A Happy Camper!</h1>
                {this.state.message.map((message, i) => {
                    return <ErrorMessage key={i}>{message}</ErrorMessage>
                })}
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
}

export default SignUpForm;