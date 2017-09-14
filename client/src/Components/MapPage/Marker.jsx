import React, { Component } from 'react';
import styled from 'styled-components';

class Marker extends Component {
    constructor() {
        super()
        this.state= {
            hover: false,
        }
    }
    _toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }
    render() {
        const MarkerDiv = styled.div`
            position: absolute;
            top: ${this.state.hover ? "-40px" : "-30px" };
            right: -10px;
            img {
              height: ${this.state.hover ? "40px" : "30px" };
            }
          `
        return (
            <MarkerDiv onMouseEnter={this._toggleHover} onMouseLeave={this._toggleHover}>
                <img src="https://i.imgur.com/8KcuG4P.png" alt="marker" />
            </MarkerDiv>
        );
    }
}

export default Marker;