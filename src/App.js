import React from 'react';
import List from './List';
import './appStyles.css'

function App(props) {
  const listComponents = props.store.lists.map(list => <List key={list.id} header={list.header} cards={list.cardIds} />);
  return (
    <main className='App'>
      <header>
        <h1>
          Trelloyes!
        </h1>
      </header>
      <div className='App-list'>
        {listComponents}
      </div>
    </main>
  );
}

export default App;
