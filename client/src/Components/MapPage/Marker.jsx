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
            left: -50%;
            img {
              height: ${this.state.hover ? "40px" : "30px" };
            }
          `
        return (
            <MarkerDiv onMouseEnter={this._toggleHover} onMouseLeave={this._toggleHover}>
                <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png" alt="marker" />
            </MarkerDiv>
        );
    }
}

export default Marker;