import React from "react";
import './PianoKey.css';

type PianoKeyProps = {
    note: string,
    octave: number
}

function isAccidental(note: string) {
    return note.includes("#") || note.includes("b");
}

export function PianoKey(props: PianoKeyProps){
    let styleClass = "piano-key";
    const accidental = isAccidental(props.note);
    if(accidental){
        styleClass = "piano-key-accidental";
    }

    return (
        <div className={styleClass}>
            {props.note}
        </div>
    )
}