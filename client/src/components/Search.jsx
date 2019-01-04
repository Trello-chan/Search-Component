import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputting: false
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
            <div>expand</div>
            <div onClick={this.changeInput}>X</div>
          </InputContainer>}
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
  & :nth-child(1) {
    width: 170px;
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
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

export default Search;