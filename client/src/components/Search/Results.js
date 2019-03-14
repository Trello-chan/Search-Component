import React, { Component } from 'react';
const styled = window.styled;

import Card from './Card/Card';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverOveringID: null,
      currentCard: null,
      showOverlay: false
    }
  }

  handleCardClick = (currentCard) => this.setState({ currentCard, showOverlay: !this.state.showOverlay });

  hoveringOverCard = hoverOveringID => this.setState({ hoverOveringID });

  render() {
    let { hoverOveringID, currentCard, showOverlay } = this.state;
    let { cards } = this.props;
    return (
    <div>
      {cards.length === 0 ? 
      
        <Center>
          We couldn't find any cards or boards that matched your search.
        </Center>
      :
        <div>
          {cards.map(card => 
            <CardContainer key={card.id}>
              <div 
                onClick={() => this.handleCardClick(card)}
                onMouseEnter={() => this.hoveringOverCard(card.id)} 
                onMouseLeave={() => this.hoveringOverCard(null)}
                style={hoverOveringID === null || hoverOveringID === card.id ? {} : { transform: 'scale(0.8)', opacity: 0.4 }}>
                {card.label}
              </div>
              <div>
                <div onClick={() => this.handleCardClick(card)}><b>{card.label}</b></div>
                <div>in <b>{card.list}</b> on <b>{card.boardId}</b></div>
              </div>
            </CardContainer>
          )}
        </div>
      }
      {showOverlay && <Card card={currentCard} handleCardClick={this.handleCardClick}/>}
    </div>
    )
  }
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  padding-top: 5px;
  > :nth-child(1) {
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(247,247,247,1) 73%,rgba(242,242,242,1) 100%);
    border-radius: 3px;
    border-bottom: 1px solid #DDDDDD;
    color: #17394d;
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 5px;
    width: 195px;
    &:hover {
      cursor: pointer;
    }
  }
  > :nth-child(2) {
    > :nth-child(1) {
      color: #17394d;
      & :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;

const Center = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
`

export default Results;