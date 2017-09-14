import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    height: 8vh;
    width: 100vw;
    background: #1B4721;
    color: #CCB80C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-shadow: 0px 0px 15px black;
    box-shadow: 0px 0px 15px black;
    font-family: 'Raleway', sans-serif;
    .no {
        font-size: 6px;
    }
`

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <p>&copy;2017 William Huizenga</p><p className="no">(but not really xD)</p>
            </FooterWrapper>
        );
    }
}

export default Footer;