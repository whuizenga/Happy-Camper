import React, { Component } from 'react';
import styled from 'styled-components';

import CampgroundItem from './CampgroundItem';

const CampgroundListDiv = styled.div`
    border: 5px solid #CCB80C;
    background-color: #81807D;
    overflow: scroll;
`

class CampGroundList extends Component {
    render() {
        return (
            <CampgroundListDiv>
                {this.props.campgroundList.map((campground, i) => {
                    return (<CampgroundItem key={i} index={i}
                                    campground={campground}
                                    toggleHover={this.props.toggleHover} />
                )})}
            </CampgroundListDiv>
        );
    }
}

export default CampGroundList;