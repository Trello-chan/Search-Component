import React from 'react';
import styled from 'styled-components';

const Results = ({ cards }) =>
  <div>
    {cards.length === 0 ? 
    
      <Center>
        We couldn't find any cards or boards that matched your search.
      </Center>
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