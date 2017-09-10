import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100vw;
    height: 8vh;
    background-color: #1B4721;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    h1{
        margin: 0px 50px;
        color: #CCB80C;

    }
`

class MapPageFooter extends Component {
    render() {
        return (
            <FooterContainer>
                <h1>Happy Camper!</h1>
            </FooterContainer>
        );
    }
}

export default MapPageFooter;