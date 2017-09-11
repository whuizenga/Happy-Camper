import React, { Component } from 'react';
import styled from 'styled-components';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const MarkerDiv = styled.div`
  position: 'absolute',
  width: ${K_WIDTH},
  height: ${K_HEIGHT},
  left: -${K_WIDTH} / 2,
  top: -${K_HEIGHT} / 2,

  border: '5px solid #f44336',
  borderRadius: ${K_HEIGHT},
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
  `

class Marker extends Component {
    render() {
        return (
            <MarkerDiv>
                <p>marker</p>
            </MarkerDiv>
        );
    }
}

export default Marker;