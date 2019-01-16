import React, { Component } from 'react';
import styled from 'styled-components';

import CardImage from '../cssImages/cards';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <DetailContainer>
        <div>
          <CardImage />
          Label + board
        </div>
        <div>
          Description
        </div>
        <div>
          Comment
        </div>
        <div>
          Activity
        </div>
      </DetailContainer>
    )
  }
}

const DetailContainer = styled.div`
  width: 75%;
`

export default Detail;