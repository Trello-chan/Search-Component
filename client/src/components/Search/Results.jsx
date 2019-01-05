import React from 'react';

const Results = ({ cards }) =>
  <div>
    {cards.length === 0 ? 
    
      <div>
        We couldn't find any cards or boards that matched your search.
      </div>
    :
      <div>
        mapping thru cards
      </div>
    
    }
  </div>

export default Results;