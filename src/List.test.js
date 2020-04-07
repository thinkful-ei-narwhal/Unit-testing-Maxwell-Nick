import React from 'react';
import STORE from './store';
import List from './List';
import library from 'react-test-renderer';

it('renders the UI as expected', () => {
  const jsonStringNew = library
    .create(<List key={STORE.lists[0].id} header={STORE.lists[0].header} cards={STORE.lists[0].cardIds} />)
    .toJSON();
  expect(jsonStringNew).toMatchSnapshot();
});