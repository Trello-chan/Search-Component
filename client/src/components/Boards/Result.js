import React from 'react';
// import styled from 'styled-components';
const styled = window.styled;

const Results = ({ board }) =>
  <ResultsDisplay key={board.id} style={ board.backgroundImage ? { backgroundImage: `url(${board.backgroundImage})`} : { background: randomColor()}}>
    <div></div>
    <div>{board.title}</div>
  </ResultsDisplay>

const randomColor = () => {
  return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

const ResultsDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
  border-radius: 3px;
  > :nth-child(1) {
    height: 36px;
    width: 36px;
  }
  > :nth-child(2) {
    align-items: center;
    background: rgba(255,255,255, 0.8);
    color: #17394d;
    display: flex; 
    font-weight: 800;
    padding: 5px;
    width: calc(100% - 36px);
  }
`;

export default Results;