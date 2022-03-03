import React from 'react';
import './App.css';
import {useState} from 'react';

interface AppProps {}

function App({}: AppProps)
{
  const [words, setWords] = useState("")

  return (
    <>
      <div className="App">
        <input 
          type="text"
          onChange={({target: {value}})=>setWords(value)}/>
        <p>{words}</p>
        <p>another <span style={{fontWeight:"bold"}}>paragraph</span></p>
      </div>
      <p>kioni says: test paragraph</p>
    </>
  );
}

export default App;
