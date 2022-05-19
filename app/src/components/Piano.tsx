import React from "react";
import { PianoKey } from "./PianoKey";
import './Piano.css';
import { aLL_nOTES, Note } from "../App";
import { render } from "react-dom";

type PianoProps = {
    disabled: boolean;
    onClick: (note: Note) => void
}

export function Piano(props: PianoProps) {
    //TODO: Make keys change color to be slightly darker when pressed
    //const [keyShadow, setKeyShadow] = React.useState([]); 

    const keys = aLL_nOTES.map((current, i) => <PianoKey key={i} note={current} octave={4} onClick={() => props.onClick(current)} disabled={props.disabled} />)
    return (
        <div className="piano">
            {keys}
        </div>
    )
}