import React, { Component } from 'react';
const styled = window.styled;
import axios from 'axios';

import ExpandImage from '../cssImages/expand';
import SearchDrawerDefault from './SearchDrawerDefault';
import Results from './Results';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      doneSearching: false,
      cards: []
    }
  }

  backToDefault = () => {
    this.setState({ doneSearching: false, cards: [] });
  }

  findCardLabel = (label) => {
    axios
      .get(`/search-api/card?label=${label}`)
      .then(({data}) => this.setState({ cards: data, searching: false, doneSearching: true }))
      .catch(err => console.error(err));
  }

  searching = (e) => {
    let { value } = e.target;
    if (value !== '') {
      this.setState({ searching: true, doneSearching: false }, () => this.findCardLabel(value));
    }
  }

  render() {
    let { cards, doneSearching, searching } = this.state;
    let { closeDisplay } = this.props
    return (
      <StyledSearchTopContainer style={{ background: 'white' }}>
          <InputContainer>
            <input type="text" onChange={this.searching}/>
            <ExpandImage />
            <div onClick={closeDisplay}>&#215;</div>
          </InputContainer>
          
          <DrawerContainer>
            {!searching && !doneSearching && cards.length === 0 &&
              <SearchDrawerDefault />
            }
            {(searching || doneSearching || cards.length > 0) &&
              <div>
                <ResultNav>
                  <div>{cards.length > 0 && <b>CARDS</b>}</div>
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
                {searching && 
                  <div>
                    Searching
                  </div>
                }
                {doneSearching &&
                  <Results cards={cards}/>
                }
              </div>
            }
          </DrawerContainer>
      </StyledSearchTopContainer>
    )
  }
}

const InputContainer = styled.div`
  color: #6b808c;
  > :nth-child(1) {
    border-width: 0px;
    font-size: 12px;
    outline: none;
    width: 220px;
    @media screen and (max-width: 900px) {
      width: 120px;
    }
  }
  > :nth-child(3) {
    font-size: 1.8em;
    line-height: 15px;
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
  max-width: 280px;
  min-width: 32px;
  height: 100%;
  > :nth-child(1) {
    display: flex;
    flex-direction: row;
  }
`;

const DrawerContainer = styled.div`
  background-color: #ebeef0;
  border-radius: 5px;
  color: #6b808c;
  left: 133px;
  min-height: 100px;
  position: absolute;
  top: 41px;
  width: 580px;
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
    font-size: 12px;
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