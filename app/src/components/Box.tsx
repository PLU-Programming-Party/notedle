import React from "react";
import "./Box.css";

type BoxProps = {
    guess: string[],
    color: string[]
}
export function Box(props: BoxProps){
    return(
        <div className="box">
        {props.guess.map((current,i) => <p style={{backgroundColor: props.color[i]}} className="box-box">{current}</p>)}
        {/* <pre> {JSON.stringify(props.guess)} </pre> */}
        </div>
    )
}