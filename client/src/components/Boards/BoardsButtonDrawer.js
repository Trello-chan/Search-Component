import React, { Component } from 'react';
// import styled from 'styled-components';
const styled = window.styled;
import axios from 'axios';

import Result from './Result';

class BoardsDropdownDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      starredBoards: true,
      recentBoards: true,
      personalBoards: true,
      searchResults: []
    }
  }

  searchBoards = (e) => {
    e.preventDefault();
    let { query } = this.state;
    axios
      .get(`/search-api/board?title=${query}`)
      .then( ({ data }) => this.setState({ searchResults: data }))
      .catch(err => console.log(err));
  }

  updateQuery = (e) => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  }

  toggle = (e) => {
    let { title } = e.target;
    this.setState({ [title]: !this.state[title]})
  }

  render() {
    let { personalBoards, query, recentBoards, starredBoards, searchResults } = this.state;
    let { boards } = this.props;
    return (
      <DrawerContainer>
        <form action="" onSubmit={this.searchBoards}>
          <DrawerInput value={query} type="text" onChange={this.updateQuery} placeholder="Find boards by name..." />
        </form>

        {searchResults.length === 0 ? 
          <DrawerContentContainer>
            <div>
              <DrawerHeaderContainer>
                <Star>&#9734;</Star>
                <h5>STARRED BOARDS</h5>
                {starredBoards && <Minus title="starredBoards" onClick={this.toggle}>-</Minus>}
                {!starredBoards && <Plus title="starredBoards" onClick={this.toggle}>+</Plus>}
              </DrawerHeaderContainer>
              {starredBoards && 
                <StarAdvice>
                  Star your most important boards to keep them right at your fingertips.
                </StarAdvice>
              }
            </div>
            
            <div>
              <DrawerHeaderContainer>
                <Clock>&#x1F557;</Clock>
                <h5>RECENT BOARDS</h5>
                {recentBoards && <Minus title="recentBoards" onClick={this.toggle}>-</Minus>}
                {!recentBoards && <Plus title="recentBoards" onClick={this.toggle}>+</Plus>}
              </DrawerHeaderContainer>
              <div></div>
              {recentBoards && 
                <div>
                  {boards.map(board => 
                    <Result key={board.id} board={board}/>
                  )}
                </div>
              }
            </div>

            <div>
              <DrawerHeaderContainer>
                <Star>&#9734;</Star>
                <h5>PERSONAL BOARDS</h5>
                {personalBoards && <Minus title="personalBoards" onClick={this.toggle}>-</Minus>}
                {!personalBoards && <Plus title="personalBoards" onClick={this.toggle}>+</Plus>}
              </DrawerHeaderContainer>
            </div>

            <div>
              Groups?
            </div>
            <div>
              <PaddedDrawerBox>Create new board...</PaddedDrawerBox>
              <PaddedDrawerBox>Always keep this menu open.</PaddedDrawerBox>
              <PaddedDrawerBox>See closed boards...</PaddedDrawerBox>
            </div>
          </DrawerContentContainer>
          :
          <ResultsWrapper>
            {searchResults.map(board => 
              <Result key={board.id} board={board}/>
            )}
          </ResultsWrapper>}
      </DrawerContainer>
    )
  }
}

const DrawerContainer = styled.div`
  background-color: white;
  border-radius: 0px 2px 2px 0px;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  left: 0px;
  overflow: scroll;
  padding: 5px;
  position: absolute;
  top: 44px;
  width: 270px;
`;

const DrawerInput = styled.input`
  border: 1.5px solid #dfe3e6;
  border-radius: 3px;
  font-size: 14px;
  height: 20px;
  margin: 2px 1px 0px;
  padding: 8px 9px;
  width: 90%;
  &:focus {
    border: 1.5px solid #0094FF;
    outline: none;
  }
`;

const DrawerContentContainer = styled.div`
  color: #6b808c;
  padding: 10px 0px 0px 0px;
  span {
    font-weight: 400;
  }
  > :nth-child(n) {
    margin-bottom: 15px;
  }
`;

const DrawerHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 10px;
  > :nth-child(1) {
    margin-right: 5px;
  }
  > :nth-child(2) {
    font-weight: 500;
    letter-spacing: .04em;
    width: 84%;
    padding-top: 2px;
  }
  > :nth-child(3) {
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background: #E8E7E4;
    }
  }
`;

const StarAdvice = styled.div`
  color: #838c91;
  line-height: 1.5;
  margin: 9px 42px 0px 26px;
`


const PaddedDrawerBox = styled.div`
  cursor: pointer;
  decoration: underline;
  padding: 12px 0px 0px 10px;
  text-decoration: underline;
`;

const Star = styled.div`
  font-size: 12px;
  height: 12px;
  line-height: 14px;
  text-align: center;
  width: 12px;
`

const Clock = styled.div`
  font-size: .6em !important;
`

const Minus = styled.div`
  font-weight: 800;
  height: 20px;
  padding: 5px 3px;
  transform: scale(2.5,1);
`

const Plus = styled.div`
  font-size: 12px;
  height: 15px;
  padding: 3px 7px;
  margin-right: 9px;
  transform: scale(1.5);
`;

const ResultsWrapper = styled.div`
  padding: 10px 0px;
`

export default BoardsDropdownDrawer;