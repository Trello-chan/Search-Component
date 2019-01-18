import React, { Component } from 'react';
import styled from 'styled-components';

import CardImage from '../cssImages/cards';
import TextAlignImage from '../cssImages/textAlign';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    }
  }

  render() {
    let { showDescription } = this.state;
    let { card } = this.props;
    return (
      <DetailContainer>
        <div>
          <CardImage />
          <div>
            <div>{card.label}</div>
            <div>in list <u>{card.boardId}</u></div>
          </div>
        </div>
        <div>
          <TextAlignImage />
          <div>
            <div>Description <div>Edit{/*if there's a description*/}</div> </div>
            <div>Add a more detailed description</div> {/* if there's no description */}
            <div></div>{/* if there's a description */}
            {showDescription && <textarea/>}
          </div>
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
  >:nth-child(n) {
    display: flex;
    flex-direction: row;
  }
`

export default Detail;