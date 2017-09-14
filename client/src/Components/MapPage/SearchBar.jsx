import React, { Component } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
    width: 30vw;
    display: flex;
    border: 1px solid #CCB80C;
    padding: 4px;
    border-radius: 15px;
    margin: 0px 25px;
    input {
        width: 25vw;
        font-size: 20px;
        color: #CCB80C;
        font-family: 'Raleway', sans-serif;
        background: none;
        border: none;
    }
    input:focus {
        outline: none;
    }
    img{
        margin: 0px 10px;
        height: 25px;
        width: 25px;
    }
`

class SearchBar extends Component {
    render() {
        return (
            <SearchWrapper>
                <img src="https://i.imgur.com/J0VrDQS.png" alt="glass" />
                <input name="search" type="text" placeholder="This doesn't work yet" />
            </SearchWrapper>
        );
    }
}

export default SearchBar;