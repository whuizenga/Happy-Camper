import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { deleteSession} from '../../util.js';

import Header from './Header';
import Footer from '../MapPage/Footer';

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const UserContentWrapper = styled.div`
    display: flex;
    height: 84vh;
    width: 100vw;
    justify-content: space-around;
`
const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ReviewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
class UserProfilePage extends Component {
    constructor() {
        super()
        this.state ={
            redirect: false,
        }
    }
    _handleLogOut = ()=> {
        axios.delete("/auth/sign_out").then((res) => {
            console.log("user signed out")
            deleteSession();
            this.setState({redirect: true});
        }).catch((err) => {
            console.log("Proper logout unsuccessful..")
            console.log(err)
            deleteSession();
            this.setState({redirect: true});
        })
    }
    render() {
        if (!localStorage["access-token"] || this.state.redirect){
            return (<Redirect to="/" />)
        } else {
        return (
            <Wrapper>
                <Header handleLogOut={this._handleLogOut}/>
                <UserContentWrapper>
                    <ProfileWrapper>
                        <div>
                            user profile container
                        </div>
                        <div>
                            user filter container
                        </div>
                    </ProfileWrapper>
                    <ReviewsWrapper>
                        <div>
                            user reviews container
                        </div>
                        <div>
                            user banlist
                        </div>
                    </ReviewsWrapper>
                </UserContentWrapper>
                <Footer />
            </Wrapper>
        );
    }
    }
}

export default UserProfilePage;