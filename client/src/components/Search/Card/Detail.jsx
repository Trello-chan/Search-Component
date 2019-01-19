import React, { Component } from 'react';
import styled from 'styled-components';

import CardImage from '../../cssImages/cards';
import TextAlignImage from '../../cssImages/textAlign';
// import SpeechBubbleImage from '../../cssImages/speechBubble';
import ActivityImage from '../../cssImages/activity';

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
          <TextAlignImage />
          <div>
            <div>Description {card.description && <span><u>Edit</u></span>}</div>
            {card.description ? 
              <div>{card.description}</div>
              :
              <div>Add a more detailed description</div>
            }
            {showDescription && <textarea/>}
          </div>
        </div>
        <div>
          <CardImage />
          Comment
        </div>
        <div>
          <ActivityImage />
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