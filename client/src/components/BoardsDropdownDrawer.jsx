import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

class BoardsDropdownDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      starredBoards: true,
      recentBoards: true,
      personalBoards: true,
    }
  }

  searchBoards = () => {
    let { query } = this.state;
    let options = {
      params: {
        query
      }
    }
    axios
      .get('/api/boards', options)
      .then(data => console.log(data))
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
    let { personalBoards, query, recentBoards, starredBoards } = this.state;
    return (
      <DrawerContainer>
        <form action="" onSubmit={this.searchBoards}>
          <DrawerInput value={query} type="text" onChange={this.updateQuery} placeholder="Find boards by name..." />
        </form>

        <DrawerContentContainer>
          <div>
            <DrawerHeaderContainer>
              <div>&#9734;</div>
              <header>STARRED BOARDS</header>
              {starredBoards && <Minus title="starredBoards" onClick={this.toggle}>-</Minus>}
              {!starredBoards && <Plus title="starredBoards" onClick={this.toggle}>+</Plus>}
            </DrawerHeaderContainer>
            {starredBoards && 
              <div>
                Star your most important boards to keep them right at your fingertips.
              </div>
            }
          </div>
          
          <div>
            <DrawerHeaderContainer>
              <Clock>&#x1F557;</Clock>
              <header>RECENT BOARDS</header>
              {recentBoards && <Minus title="recentBoards" onClick={this.toggle}>-</Minus>}
              {!recentBoards && <Plus title="recentBoards" onClick={this.toggle}>+</Plus>}
            </DrawerHeaderContainer>
          </div>

          {personalBoards &&
            <div>Personal Boards</div>
          }
          <div>
            Groups?
          </div>
          <div>Create new board...</div>
          <div>Always keep this menu open.</div>
          <div>See closed boards...</div>
        </DrawerContentContainer>
      </DrawerContainer>
    )
  }
}

const DrawerContainer = styled.div`
  background-color: white;
  border-radius: 0px 2px 2px 0px;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  max-height: calc(100% - 49px);
  left: 0px;
  overflow: scroll;
  padding: 5px;
  position: absolute;
  top: 34px;
  width: 214px;
`;

const DrawerInput = styled.input`
  border: 1.5px solid #dfe3e6;
  border-radius: 3px;
  height: 10px;
  margin: 2px 1px 0px;
  padding: 8px 9px;
  width: 90%;
`;

const DrawerContentContainer = styled.div`
  color: #6b808c;
  font-size: 12px;
  padding: 10px 0px 10px 10px;
  span {
    font-weight: 400;
  }
`

const DrawerHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  align-items: center;
  & :nth-child(1) {
    font-size: .8em;
    margin-right: 5px;
  }
  & :nth-child(2) {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .04em;
    width: 84%;
    padding-top: 2px;
  }
  & :nth-child(3) {
    border-radius: 2px;
    &:hover {
      background: #E8E7E4;
    }
  }
  + div {
    color: #838c91;
    font-size: 11.2px;
    line-height: 1.5;
    margin: 6px 18px 10px 14px;
  }
`;

const Clock = styled.div`
  font-size: .6em !important;
`

const Minus = styled.div`
  font-weight: 800;
  height: 20px;
  padding: 2px 3.5px;
  transform: scale(2,1);
`

const Plus = styled.div`
  font-size: 10px;
  font-weight: 420;
  height: 15px;
  padding: 0px 4.5px 0px 4.5px;
  transform: scale(1.5,1.5);
`

export default BoardsDropdownDrawer;