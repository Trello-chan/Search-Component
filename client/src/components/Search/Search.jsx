import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ExpandImage from '../cssImages/expand';
import SearchDrawerDefault from './SearchDrawerDefault';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputting: false,
      searching: false,
      doneSearching: false,
      cards: []
    }
  }

  backToDefault = () => {
    this.setState({ doneSearching: false, cards: [] });
  }

  changeInput = () => {
    this.setState({ inputting: !this.state.inputting });
  }

  findCardLabel = (label) => {
    axios
      .get(`/api/card?label=${label}`)
      .then(({data}) => { 
        console.log(data)
        this.setState({ cards: data, searching: false, doneSearching: true }), () => console.log(this.state)
      })
      .catch(err => console.error(err));
  }

  searching = (e) => {
    let { value } = e.target;
    if (value !== '') {
      this.setState({ searching: true }, () => this.findCardLabel(value));
    }
  }

  render() {
    let { cards, doneSearching, inputting, searching } = this.state;
    return (
      <StyledSearchTopContainer style={{ background: inputting ? 'white': 'rgba(255,255,255,.3)' }}>
        {!inputting && <div onClick={this.changeInput}><BlankSpace></BlankSpace><div>&#128270;</div></div>}
        {inputting && 
          <InputContainer>
            <input type="text" onChange={this.searching}/>
            <ExpandImage />
            <div onClick={this.changeInput}>&#215;</div>
          </InputContainer>}
        {inputting &&
          <DrawerContainer>
            {!searching && !doneSearching && cards.length === 0 &&
              <SearchDrawerDefault />
            }
            {(searching || cards.length > 0) &&
              <div>
                <ResultNav>
                  <div></div>
                  <div>
                    <div onClick={this.backToDefault}>
                      <span>←{' '}</span>
                      <span><u>Back to Saved Searches</u></span>
                    </div>
                    <div onClick={this.backToDefault}>
                      <span>☆{' '}</span>
                      <span><u>Save this Search</u></span>
                    </div>
                  </div>
                </ResultNav>
                {/* results */}
              </div>
            }
          </DrawerContainer>
        }
      </StyledSearchTopContainer>
    )
  }
}

const BlankSpace = styled.div`
  cursor: text;
  width: 118px;
  @media screen and (max-width: 600px) {
    width: 0px;
  }
  + div {
    cursor: pointer;
    font-size: 10px;
  }
`;

const InputContainer = styled.div`
  color: #6b808c;
  > :nth-child(1) {
    border-width: 0px;
    outline: none;
    width: 170px;
  }
  > :nth-child(3) {
    font-size: 1.3em;
    line-height: 18px;
  }
  > :nth-child(n + 2) {
    cursor: pointer;
  }
`;

const StyledSearchTopContainer = styled.div`
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3.5px;
  max-width: 240px;
  min-width: 26px;
  height: 100%;
  padding: 0px 5px;
  > :nth-child(1) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const DrawerContainer = styled.div`
  background-color: #ebeef0;
  border-radius: 2px;
  color: #6b808c;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  font-size: 11px;
  left: 106px;
  min-height: 125px;
  position: absolute;
  top: 34px;
  width: 460px;
  padding: 10px;
`;

const ResultNav = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    display: flex;
    flex-direction: row;
    height: 20px;
  }
  > :nth-child(1) {
    width: 45%;
  }
  > :nth-child(2) {
    width: 55%;
    > * {
      letter-spacing: .02em;
      > * {
        cursor: pointer;
        &:hover {
            color: black;
          }
      }
    }
    > :nth-child(1) {
      padding-right: 10px
    }
  }
`;

export default Search;