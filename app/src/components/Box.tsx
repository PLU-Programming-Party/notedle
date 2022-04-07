import React from "react";

type BoxProps = {guess: string[]}
export function Box(props: BoxProps){
    return(
        <pre> {JSON.stringify(props.guess)} </pre>
    )
}