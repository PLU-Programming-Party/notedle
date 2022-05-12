import React from "react";
import { PianoKey } from "./PianoKey";
import './Piano.css';
import { aLL_nOTES } from "../App";
import { render } from "react-dom";

export function Piano() {
    //TODO: Make keys change color to be slightly darker when pressed
    //const [keyShadow, setKeyShadow] = React.useState([]); 

    const keys = aLL_nOTES.map((current, i) => <PianoKey key={i} note={current} octave={4} />)
    return (
        <div className="piano">
            {keys}
        </div>
    )
}