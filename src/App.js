import React, {
  useState, useEffect, useRef, useMemo,
} from 'react';
import { useTitleInput } from './hooks/useTitleInput';
import Toggle from './Toggle';


const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const title = 'Level Up Dishes';

  const reverseWord = (word) => {
    console.log('function called');
    return word.split('').reverse().join('');
  };


  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <div className='main-wrapper' ref={ref}>
      <h1>{TitleReversed}</h1>
      <Toggle />

      <form onSubmit={(e) => {
        e.preventDefault();
      }}
      >
        <input type='text' onChange={e => setName(e.target.value)} value={name} />
        <button type='button'>Submit</button>
      </form>
    </div>
  );
};

export default App;
