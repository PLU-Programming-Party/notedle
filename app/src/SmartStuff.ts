export type PrettyColor = 'grey' | 'green' | 'yellow';

export function makePrettyColors(actual:string[], guess:string[]):PrettyColor[]{

    const prettyColors:PrettyColor[] = []
    const numNotesActual:Map<string, number> = new Map();

    for(const note in actual){
        numNotesActual.set(note, (numNotesActual.get(note)??0) + 1)
    }

    for(let i = 0; i < actual.length; i++){
        if((numNotesActual.get(guess[i])??0) > 0){
            prettyColors[i] = "yellow"
            numNotesActual.set(guess[i], (numNotesActual.get(guess[i])??0) - 1)
        } else {
            prettyColors[i] = "grey"
        }
    }

    for(let i = 0; i < actual.length; i++){
        if(actual[i] === guess[i]){
            prettyColors[i] = "green"
            numNotesActual.set(actual[i], (numNotesActual.get(actual[i])??0) - 1)
        } 
    }

    return prettyColors 
}