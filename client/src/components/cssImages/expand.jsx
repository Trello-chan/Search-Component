import React from 'react';
import styled from 'styled-components';

const Expand = () =>
  <TopContainer>
    <div>&#8599;</div>
    <div></div>
  </TopContainer>

const TopContainer = styled.div`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  position: relative;
  & :nth-child(1) {
    background: white;
    font-size: 10px;
    font-weight: 900;
    height: 12px;
    position: absolute;
    right: 0;
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