import React, { Component } from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    width: 100vw;
    height: 7vh;
    background-color: #CCB80C;
    color: #1B4721;
    display: flex;
    align-items: center;
    p {
        font-size: 20px;
        font-weight: bold;
        margin: 3px 15px;
    }
`

class HomepageFooter extends Component {
    render() {
        return (
            <FooterDiv>
                <p>About Happy Camper!</p>
            </FooterDiv>
        );
    }
}

export default HomepageFooter;