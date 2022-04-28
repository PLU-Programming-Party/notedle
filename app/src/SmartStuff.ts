export type PrettyColor = 'grey' | 'green' | 'yellow';

export function makePrettyColors(actual: string[], guess: string[]): PrettyColor[] {

    const prettyColors: PrettyColor[] = []
    const numNotesActual: Map<string, number> = new Map();

    for (const note of actual) {
        numNotesActual.set(note, (numNotesActual.get(note) ?? 0) + 1)
    }

    // ====================================== THE COMMENT WARS ===============================================
    // 1. Analysis of what is green and what is not is not independent at each point in the array
    // 2. EX: Must decrement for a green at the end of an array before decrementing for a yellow at the start
    // 3. Have to check the greens first so you don't accidentally mark a yellow that comes before it if there
    //    is only one of that note in the actual song
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] === guess[i]) {
            prettyColors[i] = "green"
            numNotesActual.set(actual[i], (numNotesActual.get(actual[i]) ?? 0) - 1)
        }
    }

    for (let i = 0; i < actual.length; i++) {
        if (prettyColors[i] !== "green") {
            if ((numNotesActual.get(guess[i]) ?? 0) > 0) {
                prettyColors[i] = "yellow"
                numNotesActual.set(guess[i], (numNotesActual.get(guess[i]) ?? 0) - 1)
            }
            else {
                prettyColors[i] = "grey"
            }
        }
    }

    return prettyColors
}