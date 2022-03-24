import React from 'react';
import './App.css';
import { useState } from 'react';
import * as Tone from 'tone'

interface AppProps { }

function App({ }: AppProps) {

  const allNotes = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"] // for future: C5, C#5, etc.?
  const targetSong: Array<[string,number]> = [["B",1], ["A",1],["G",4],["B",2], ["A",3],["G",1],["B",1],["A",1],["G",1],["B",1]] // hot cross buns
  const synth = new Tone.Synth().toDestination();
  
  const [words, setWords] = useState("")
  const [actual, setActual] = useState<string[]>([])

  function playNote(value: string) {
    synth.triggerAttackRelease(value, "4n", Tone.now());
  }

  function playAllNotes(notesArr: string[]){
    const now = Tone.now()
    var num = 0
    var sum =0
    for(const i of notesArr){
      synth.triggerAttackRelease(i, targetSong[num][1],sum)
      num++
      sum = sum + targetSong[num][1]
    }
  }

  function handleChange(value: string) {
    playNote(value)
    const guessedNotes = actual.slice()
    guessedNotes.push(value)
    setActual(guessedNotes)
  }

  function removeNote() {
    const notes = actual.slice()
    notes.pop()
    setActual(notes)
  }

  function removeAllNotes() {
    setActual([])
  }

  return (
    <div className="App">
      <p><button onClick={()=> playAllNotes(actual)}>Play</button> {actual.join(", ")} </p>
      <input
        type="text"
        onChange={({ target: { value } }) => setWords(value)} />
      <p>{words}</p>
      <p>It's <span style={{ fontWeight: "bold" }}>Awesome</span></p>
      <div>
        {allNotes.map((note) => <button onClick={() => handleChange(note)} disabled={actual.length >= targetSong.length}>{note}</button>)}
        <button onClick={() => removeNote()} disabled={actual.length == 0} id="deleteButton">Delete</button>
        <button onClick={() => removeAllNotes()} disabled={actual.length == 0} id = "deleteAllButton">Delete All</button>
      </div>
    </div>
  );
}

export default App;
