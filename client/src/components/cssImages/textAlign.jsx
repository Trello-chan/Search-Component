import React from 'react';
import styled from 'styled-components';

const TextAlignImage = () =>
  <TextAlignContainer>
    <Lines>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
    </Lines>
  </TextAlignContainer>

const TextAlignContainer = styled.div`
  align-items: center;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
`;

const Lines = styled.div`
  height: 16px;
  width: 16px;
`

export default TextAlignImage;