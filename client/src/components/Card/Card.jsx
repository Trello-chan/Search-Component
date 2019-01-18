import React, { Component } from 'react';
import styled from 'styled-components';

import Actions from './Actions';
import Add from './Add';
import Detail from './Detail';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    let { card, handleCardClick } = this.props;
    return (
      <ModalOverlay onClick={() => handleCardClick(card)}>
        <CardDisplay>
          <Detail />
          {/* instead of making entire screen scroll, the left half should scroll if height exceeds CardDisplay */}
          <div>
            <Actions />
            <Add />
          </div>
        </CardDisplay>
      </ModalOverlay>
    )
  }
}

const ModalOverlay = styled.div`
  background-color: rgba(0,0,0,.64);
  display: flex;
  height: 100vh; 
  ${'' /* maybe taller */}
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const CardDisplay = styled.div`
  background-color: #ebeef0; 
  border-radius: 2px;
  height: 650px;
  width: 760px;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 45px;
  ${'' /* when screen is < 750px, width changes to possibly to flex screen width */}
  @media screen and (max-width: 750px) {
    width: 400px;
  }
`;

const CardContainer = styled.div`

`;

export default Card;
