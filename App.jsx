import * as React from 'react';
import List from './components/List';
import Search from './components/Search';

const App = () => {

  console.log('App renders');

  const [searchTerm, setSearchTerm] = React.useState('');


  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ];

  const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
  ];

  const filteredWords = words.filter((word) =>
    word.includes('e')
  );
  console.log("Which word includes 'e'? ", filteredWords);

  const wordlength = words.map((word) => word.length > 6);
  console.log("is word length > 6? ", wordlength);

  //**Callback handler in a nutshell * /
  //** We pass a function from parent component (App) to child component (Search) */
  //** The child component (Search) executes the function (handleSearch) */
  //** The child component (Search) passes the event object to the function (handleSearch) */
  //** The parent component (App) receives the event object from the child component (Search) */
  //** React props are always passed down the component tree */
  //** Therefore, functions that are passed down as callback handlers in props can be used to communicate up the component tree * /

  //** A - a callback handler gets introduced as Event Handler */
  const handleSearch = (event) => {
    //** D - and 'calls back' to the place it was introduced */
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      {/* /* B - the callback handler gets passed as a prop to another component */}
      <Search onSearch={ handleSearch } /> 

      <hr />
     
      <List list={ searchedStories } />
    </div>
  );
};

export default App
