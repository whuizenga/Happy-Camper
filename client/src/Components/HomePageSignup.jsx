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
    render() {
        return (
            <SignUpDiv>
                {/* {when the user is logged in this should become a logout button} */}
                <p>Sign Up!</p>
            </SignUpDiv>
        );
    }
}

export default SignUpButton;