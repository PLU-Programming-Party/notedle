import React from 'react';
import './App.css';
import {useState} from 'react';

interface AppProps {}

function App({}: AppProps)
{

  const hotCrossBuns = ["Bb", "A", "G", "Bb", "A", "G"]
  const happyBirthday = ["A", "A", "B", "A", "D", "C#"]
  const [words, setWords] = useState("")
  const [actual, setActual] = useState(hotCrossBuns.map(() => ""))

  function handleChange (i: number, value: string){
    const guessedNotes = actual.slice()
    guessedNotes[i] = value
    setActual(guessedNotes)
  }

  return (
    <div className="App">
      <div> {hotCrossBuns.map((aBun, i) => {
        return <input  
        onChange= {(event)=> handleChange(i, event.target.value)}
        />})
      }
      </div>
      <p> {actual.join(", ")} </p>
      <input 
        type="text"
        onChange={({target: {value}})=>setWords(value)}/>
      <p>{words}</p>
      <p>another <span style={{fontWeight:"bold"}}>Awesome</span></p>
    </div>
  );
}

export default App;
