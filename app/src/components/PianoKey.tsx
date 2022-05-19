import React from "react";
import './PianoKey.css';

type PianoKeyProps = {
    note: string,
    octave: number,
    disabled: boolean,
    onClick: () => void
}

function isAccidental(note: string) {
    return note.includes("#") || note.includes("b");
}

export function PianoKey(props: PianoKeyProps) {
    let styleClass = "piano-key";
    let clikUwU = props.onClick;
    const accidental = isAccidental(props.note);
    if (accidental) {
        styleClass = "piano-key-accidental";
    }
    if (props.disabled) {
        styleClass += " disabled";
        clikUwU = () => { };
    }

    return (
        <div className={styleClass} onClick={clikUwU}>
            {props.note.substring(0, props.note.length - 1)}
        </div>
    )
}