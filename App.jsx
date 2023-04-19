import * as React from 'react';
import List from './components/List';
import Search from './components/Search';

const App = () => (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />

      <hr />
     
      <List />
    </div>
  );

export default App
