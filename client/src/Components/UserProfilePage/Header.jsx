import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 8vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #1B4721;
    a {
        margin: 0px 50px;
        text-decoration: none;
        color: #CCB80C;
        font-family: 'Raleway', sans-serif; 
    }
    a:hover{
        color: white;
    }
`

class Header extends Component {
    render() {
        return (
            <Wrapper>
                <a onClick={this.props.handleLogOut} href="/">Log out</a>
            </Wrapper>
        );
    }
}

export default Header;