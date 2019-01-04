import React, { Component } from 'react';
import styled from 'styled-components';

import ExpandImage from '../cssImages/expand';
import SearchDrawerDefault from './SearchDrawerDefault';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputting: false,

    }
  }

  changeInput = () => {
    this.setState({ inputting: !this.state.inputting });
  }

  render() {
    let { inputting } = this.state;
    return (
      <StyledSearchTopContainer style={{ background: inputting ? 'white': 'rgba(255,255,255,.3)' }}>
        {!inputting && <div onClick={this.changeInput}><BlankSpace></BlankSpace><div>&#128270;</div></div>}
        {inputting && 
          <InputContainer>
            <input type="text"/>
            <ExpandImage />
            <div onClick={this.changeInput}>&#215;</div>
          </InputContainer>}
        {inputting && 
          <SearchDrawerDefault />
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
`

const InputContainer = styled.div`
  color: #6b808c;
  & :nth-child(1) {
    border-width: 0px;
    outline: none;
    width: 170px;
  }
  & :nth-child(3) {
    font-size: 1.3em;
    line-height: 18px;
  }

`

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
  & :nth-child(1) {
    display: flex;
    flex-direction: row;
  }
  & :nth-child(2) {
    & :nth-child(1) {
      display: block;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

export default Search;