import React from 'react';
import './App.css';
import { useState } from 'react';
import * as Tone from 'tone'
import { Box } from './components/Box'

interface AppProps { }

function App({ }: AppProps) {

  const allNotes = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"] // for future: C5, C#5, etc.?
  const targetSong: Array<[string,number]> = [["B",.3], ["A",.3],["G",.6],["B",.3], ["A",.3],["G",.6],["B",.3],["A",.3],["G",.6]] // hot cross buns
  const synth = new Tone.Synth().toDestination();
  
  const [words, setWords] = useState("")
  const [currentGuess, setCurrentGuess] = useState<string[]>([])
  const [previousGuessesUwU, setPreviousGuessesOwO] = useState<string[][]>([])

  function playNote(value: string) {
    synth.triggerAttackRelease(value, "4n", Tone.now());
  }

  function playAllNotes(notesArr: string[]){
    const now = Tone.now()
    var sum = 0
    for(let i = 0; i < notesArr.length; i++){
      synth.triggerAttackRelease(notesArr[i], targetSong[i][1], now + sum)
      sum = sum + targetSong[i][1]
    } 
  }

  function handleChange(value: string) {
    playNote(value)
    const guessedNotes = currentGuess.slice()
    guessedNotes.push(value)
    setCurrentGuess(guessedNotes)
  }

  function removeNote() {
    const notes = currentGuess.slice()
    notes.pop()
    setCurrentGuess(notes)
  }

  function removeAllNotes() {
    setCurrentGuess([])
  }

  function handleSubmit() {
    setPreviousGuessesOwO((prev) => {return prev.concat([currentGuess])})
    removeAllNotes()
  }

  return (
    <div className="App">
      <div>
        {previousGuessesUwU.map(guess => {
          return <Box guess={guess}/>
        })}
      </div>
      <p><button onClick={()=> playAllNotes(currentGuess)}>Play</button> {currentGuess.join(", ")} </p>
      <input
        type="text"
        onChange={({ target: { value } }) => setWords(value)} />
      <p>{words}</p>
      <p>It's <span style={{ fontWeight: "bold" }}>Awesome</span></p>
      <div>
        {allNotes.map((note) => <button onClick={() => handleChange(note)} disabled={currentGuess.length >= targetSong.length}>{note}</button>)}
        <button onClick={() => removeNote()} disabled={currentGuess.length == 0} id="deleteButton">Delete</button>
        <button onClick={() => removeAllNotes()} disabled={currentGuess.length == 0} id = "deleteAllButton">Delete All</button>
        <button onClick={() => handleSubmit()}> Submit </button>
      </div>
    </div>
  );
}

export default App;
