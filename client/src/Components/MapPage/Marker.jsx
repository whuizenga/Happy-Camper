import React, { Component } from 'react';
import styled from 'styled-components';

class Marker extends Component {
    render() {
        console.log(this.props);
        // this.props.$hover = this.props.hover;
        const MarkerDiv = styled.div`
            position: absolute;
            top: ${this.props.hover ? "-40px" : "-30px" };
            right: -10px;
            img {
              height: ${this.props.hover ? "40px" : "30px" };
            }
          `
        return (
            <MarkerDiv>
                <img src="https://i.imgur.com/8KcuG4P.png" alt="marker" />
            </MarkerDiv>
        );
    }
}

export default Marker;