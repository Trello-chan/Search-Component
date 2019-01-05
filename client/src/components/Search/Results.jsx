import React from 'react';
import styled from 'styled-components';

const Results = ({ cards }) =>
  <div>
    {cards.length === 0 ? 
    
      <div>
        We couldn't find any cards or boards that matched your search.
      </div>
    :
      <div>
        {cards.map(card => 
          <CardContainer key={card.id}>
            <div>
              {card.label}
            </div>
            <div>
              <div><b>{card.label}</b></div>
              <div>in <b>{card.list}</b> on <b>{card.boardId}</b></div>
            </div>
          </CardContainer>
        
        )}
      </div>
    
    }
  </div>

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  > :nth-child(1) {
    background: white;
    border-radius: 2px;
    color: #17394d;
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 5px;
    width: 155px;
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
`

export default Results;