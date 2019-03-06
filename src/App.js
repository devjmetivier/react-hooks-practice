import React, {
  useState, useEffect, useRef,
} from 'react';
import { useTitleInput } from './hooks/useTitleInput';
import Toggle from './Toggle';


const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();


  return (
    <div className='main-wrapper' ref={ref}>
      <h1>Level Up Dishes</h1>
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
