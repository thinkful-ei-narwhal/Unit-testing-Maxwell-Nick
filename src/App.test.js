// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import App from './App';
import STORE from './store';
import Card from './Card';
import List from './List';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App store={STORE}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List key={STORE.lists[0].id} header={STORE.lists[0].header} cards={STORE.lists[0].cardIds}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Card title={STORE.allCards.a.title} content={STORE.allCards.a.content}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});