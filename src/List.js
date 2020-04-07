import React from 'react';
import Card from './Card';
import STORE from './store';
import './listStyles.css'

export default function List(props) {
  const cardComponents = props.cards.map(cardId => {
    const card = STORE.allCards[cardId];
    return <Card key={card.id} title={card.title} content={card.content} />;
  });

  return (
    <div className='List'>
      <header>
        {props.header}
      </header>
      <div className='List-cards'>
        {cardComponents}
      </div>
    </div>
  );
}
