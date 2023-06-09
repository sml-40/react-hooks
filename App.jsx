import * as React from 'react';
import List from './components/List';
import InputWithLabel from './components/Search';

//** Custom Hook */
//** A custom hook follows two conventions of Reacts built-in hooks here */
//** 1. The naming convention - It starts with the word 'use' */
//** 2. The return values are returned as an array */
//** Another goal of the custom hook should be reusability */
const useStorageState = (key, initialState) => {
  //** adjusting the internal names more generic for reusability */
  const [value, setValue] = React.useState(
    localStorage.getItem('value') || initialState
  );

  //** React useEffect Hook */
  React.useEffect(() => {
    //** Here we use the local storage to store the search term */
    //** setting a local storage item with the key 'key' which is passed as an argument to the custom hook */
    //** also passing the current value of the state */
    localStorage.setItem(key, value);
  }, [value, key]);
  //** at [value, key] we're telling React to re-run the effect whenevr value or key changes */
  //** this ensures that the local storage item is always kept in sync with the current state value */

  return [value, setValue];
};
  

const App = () => {

  console.log('App renders');

  //** Here we synchronise the browsers local storage with React State */
  //** We use the local storage to persist the search term - see the handle function below*/
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');


  //** React useEffect Hook */
  //** The useEffect Hook is a function that takes two arguments */
  //** The first argument is a function that runs our side effect */
  //** The second argument is dependency array of variable */
  //** If one of these variables changes, the function for the side-effect is called */
  //** In our case, the function is called everytime the searchTerm changes */
  //** The function is also called when the component has rendered for the first time */
  // React.useEffect(() => {
  //   //** Here we use the local storage to store the search term */
  //   localStorage.setItem('search', searchTerm);
  // }, [searchTerm]);


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
    //** Here we use the local storage to store the search term */
    //** Flaw - the handler function should mostly be concerned with updating the state but it has a side effect now, so if we use the setSearchTerm state updater elsewhere in app it could it could break the feature causing bugs */
    // localStorage.setItem('search', event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      {/* /* B - the callback handler gets passed as a prop to another component */}
      <InputWithLabel
        id="search"
        label="Whatever you want to search for:"
        value={searchTerm}
        onInputChange={handleSearch}
      > 
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />
     
      <List list={ searchedStories } />
    </div>
  );
};

export default App
