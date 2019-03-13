import React from 'react';
const styled = window.styled;

const Expand = () =>
  <TopContainer>
    <div>&#8599;</div>
    <div></div>
  </TopContainer>

const TopContainer = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  position: relative;
  & :nth-child(1) {
    background: white;
    font-size: 10px;
    font-weight: 900;
    height: 12px;
    position: absolute;
    right: 3px;
    width: 10px !important;
  }
  & :nth-child(2) {
    border: 1.5px solid grey;
    border-radius: 3px;
    height: 60%;
    margin-top: 4px;
    width: 60%;
  }
`

export default Expand;