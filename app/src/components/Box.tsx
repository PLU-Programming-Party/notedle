import React from "react";
import type { PrettyColor } from "src/SmartStuff";
import "./Box.css";

type BoxProps = {
    guess: string[],
    color: PrettyColor[]
}
export function Box(props: BoxProps) {
    return (
        <div className="box">
            {props.guess.map((current, i) => <p className={`${props.color[i]} box-box`}>{current}</p>)}
            {/* <pre> {JSON.stringify(props.guess)} </pre> */}
        </div>
    )
}