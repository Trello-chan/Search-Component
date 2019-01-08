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
    return (
      <DrawerContainer>
        <div>
          <div>Create</div>
          <div>X</div>
        </div>
        
        <hr/>

        <div>
          <div>Create Board...</div>
          <div>description</div>
        </div>

        <div>
          <div>Create Team...</div>
          <div>description</div>
        </div>

        <div>
          <div>Create Business Team...</div>
          <div>description</div>
        </div>
      </DrawerContainer>
    )
  }
}

const DrawerContainer = styled.div`
  background: white;
  border-radius: 2px;
  position: absolute;
  right: 10px;
  top: 33px;
  width: 240px;
  > :nth-child(1){
    display: flex;
    flex-direction: row;
    > :nth-child(1) {
      width: 90%;
    }
    > :nth-child(2) {
      width: 10%;
    }
  }
`;

export default CreateDrawer;