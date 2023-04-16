import * as React from 'react';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getTitle(title) {
  return title;
}

const numbers = [1, 2, 3, 4, 5];

const exponentialNumbers = numbers.map((number) => number * number);
console.log(exponentialNumbers);

function App() {
  return (
    <div>
      <h1>{getTitle('Hello World')}</h1>
      <h1>{welcome.greeting}  {welcome.title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
     
    </div>
  );
}

export default App
