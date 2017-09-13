import React, { Component } from 'react';
import axios from 'axios';

class CampgroundDescription extends Component {
    constructor() {
        super()
        this.state= {
            description: true,
            alert: false,
            directions: false,
            shortDes: false,
            important: false,
            nearby: false,
            recreation: false,
        }
    }
    render() {
        let alertText = ""
        if (!this.props.campgroundInfo.alert){
            alertText = "There are no alerts at this time"
        } if (this.props.campgroundInfo.alert) {
            alertText = this.props.campgroundInfo.alert;
        } 
        return (
            <div>
                <h1>{this.props.campgroundInfo.name}</h1>
                <h3>{this.props.campgroundInfo.city}, {this.props.campgroundInfo.state}</h3>
                <p>{this.state.description ? this.props.campgroundInfo.description : null}</p>
                <p>{this.state.alert ? alertText : null}</p>
                <p>{this.state.directions ? this.props.campgroundInfo.directions : null}</p>
                <p>{this.state.shortDes ? this.props.campgroundInfo.short_description : null}</p>
                <p>{this.state.important ? this.props.campgroundInfo.important_information : null}</p>
                <p>{this.state.nearby ? this.props.campgroundInfo.nearby_attractions : null}</p>
                <p>{this.state.recreation ? this.props.campgroundInfo.recreation_information : null}</p>
            </div>
        );
    }
}

export default CampgroundDescription;