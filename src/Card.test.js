import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './store';
import Card from './Card';
import List from './List';
import renderer from 'react-test-renderer';

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card key={STORE.allCards.a.id} title={STORE.allCards.a.title} content={STORE.allCards.a.content} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});