import React, { Component } from 'react';
import styled from 'styled-components';

const OptionsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
`

const FalseButton = styled.div`
    background-color: #1B4721;
    
`
class CampgroundDescription extends Component {
    constructor() {
        super()
        this.state= {
            description: false,
            alert: false,
            directions: false,
            shortDes: true,
            important: false,
            nearby: false,
            recreation: false,
        }
    }
    _setStateToFalse = () => {
        const newState = {...this.state}
        newState.description = false,
        newState.alert = false,
        newState.directions = false,
        newState.shortDes = false,
        newState.important = false,
        newState.nearby = false,
        newState.recreation = false,
        this.setState(newState);
    }
    _moreInformation = () => {
        this._setStateToFalse();
        this.setState({description: true});
    }

    _showAlerts = () => {
        this._setStateToFalse();
        this.setState({alert: true});
    }

    _showImportantInfo = () => {
        this._setStateToFalse();
        this.setState({important: true});
    }
    _showDirections = () => {
        this._setStateToFalse();
        this.setState({directions: true});
    }
    _showNearbyInfo = () => {
        this._setStateToFalse();
        this.setState({nearby: true});
    }
    _showRecreation = () => {
        this._setStateToFalse();
        this.setState({recreation: true});
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
                <OptionsDiv>
                    <div onClick={this._moreInformation}>More Info</div>
                    <div onClick={this._showAlerts}>Alerts</div>
                    <div onClick={this._showImportantInfo}>Important Information</div>
                    <div onClick={this._showDirections}>Directions</div>
                    <div onClick={this._showNearbyInfo}>Nearby Attractions</div>
                    <div onClicl={this._showRecreation}>Recreational Activities</div>
                </OptionsDiv>
            </div>
        );
    }
}

export default CampgroundDescription;