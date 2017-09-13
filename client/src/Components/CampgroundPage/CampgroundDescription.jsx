import React, { Component } from 'react';

class CampgroundDescription extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.campgroundInfo.name}</h1>
                <h3>{this.props.campgroundInfo.city}</h3>
            </div>
        );
    }
}

export default CampgroundDescription;