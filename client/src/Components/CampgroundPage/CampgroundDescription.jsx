import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 40vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    background: linear-gradient(to top right, #FFFFCC, white);
    h1, h3 {
        font-family: 'Righteous', cursive;
    }
`
const OptionsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
`

const FalseButton = styled.div`
    background-color: #1B4721;
    border: 2px solid #1B4721;
    color: white;
    border-radius: 15px;
    padding: 8px;
    box-shadow: 0px 0px 15px black;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 10px;
    :hover {
        border: 2px solid #CCB80C;
        color: #CCB80C;
    }
`
const TrueButton = styled.div`
    background-color: #CCB80C;
    border: 2px solid #CCB80C;
    color: #1B4721;
    border-radius: 15px;
    padding: 8px;
    box-shadow: 0px 0px 15px black;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 10px;
    :hover {
        border: 2px solid black;
        color: black;
    }
`
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
            <Wrapper>
                <div>
                <h1>{this.props.campgroundInfo.name}</h1>
                <h3>{this.props.campgroundInfo.city}, {this.props.campgroundInfo.state}</h3>
                <p>{this.state.description ? this.props.campgroundInfo.description : null}</p>
                <p>{this.state.alert ? alertText : null}</p>
                <p>{this.state.directions ? this.props.campgroundInfo.directions : null}</p>
                <p>{this.state.shortDes ? this.props.campgroundInfo.short_description : null }</p>
                <p>{this.state.important ? this.props.campgroundInfo.important_information : null}</p>
                <p>{this.state.nearby ? this.props.campgroundInfo.nearby_attractions : null}</p>
                <p>{this.state.recreation ? this.props.campgroundInfo.recreation_information : null}</p>
                </div>
                <OptionsDiv>
                    {this.state.description ? <TrueButton onClick={this._moreInformation}>More Info</TrueButton> : <FalseButton onClick={this._moreInformation}>More Info</FalseButton> }
                    {this.state.alert ?<TrueButton onClick={this._showAlerts}>Alerts</TrueButton> : <FalseButton onClick={this._showAlerts}>Alerts</FalseButton> }
                    {this.state.important ? <TrueButton onClick={this._showImportantInfo}>Important Information</TrueButton> : <FalseButton onClick={this._showImportantInfo}>Important Information</FalseButton> }
                    {this.state.directions ? <TrueButton onClick={this._showDirections}>Directions</TrueButton> : <FalseButton onClick={this._showDirections}>Directions</FalseButton> }
                    {this.state.nearby ? <TrueButton onClick={this._showNearbyInfo}>Nearby Attractions</TrueButton> : <FalseButton onClick={this._showNearbyInfo}>Nearby Attractions</FalseButton> }
                    {this.state. recreation ? <TrueButton onClick={this._showRecreation}>Recreational Activities</TrueButton> : <FalseButton onClick={this._showRecreation}>Recreational Activities</FalseButton> }
                </OptionsDiv>
            </Wrapper>
        );
    }
}

export default CampgroundDescription;