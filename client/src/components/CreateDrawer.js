import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class CreateDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let { closeDisplay } = this.props;
    return (
      <DrawerContainer>
        <div>
          <div>Create</div>
          <div onClick={closeDisplay}>&#215;</div>
        </div>
        
        <hr/>

        <ActionContainer>
          <h4>Create Board...</h4>
          <div>A board is made up of cards ordered on lists.  Use it to manage projects, track information, or organize anything</div>
        </ActionContainer>

        <ActionContainer>
          <h4>Create Team...</h4>
          <div>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</div>
        </ActionContainer>

        <ActionContainer>
          <h4>Create Business Team...</h4>
          <div>With Business Class your team has more security, administrative controls, and unlimited Power-Ups.</div>
        </ActionContainer>
      </DrawerContainer>
    )
  }
}

const DrawerContainer = styled.div`
  background: white;
  border-radius: 2px;
  color: #6b808c;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  right: 13px;
  top: 41px;
  width: 305px;
  > :nth-child(1){
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    > :nth-child(1) {
      margin-left: 20px;
      text-align: center;
      width: 90%;
    }
    > :nth-child(2) {
      font-size: 20px;
      line-height: 12px;
      font-weight: 300;
      text-align: end;
      width: 10%;
      &:hover { 
        cursor: pointer;
      }
    }
  }
`;

const ActionContainer = styled.div`
  padding: 5px 10px 10px;
  &:hover {
    background: #3F7FBF;
    color: white !important;
  }
  & h4 {
    color: #17394d;
    margin: 0px 0px 5px 0px;
  }
  > :nth-child(2) {
    font-size: 12px;
  }
`

export default CreateDrawer;