// using partial
interface Starship {
    name: string;
    enableHyperJump: Boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {
    
}

updateStarship(1, {
    name: 'Explorer'
})

// using record

const starships: Record<string,Starship> = {
    Explorer1: {
        name: 'Eplorer1',
        enableHyperJump: true
    },
    Explorer2: {
        name: 'Eplorer2',
        enableHyperJump: false
    } 
}

type StarshipNameOnly = Pick<Starship, 'name'>
type StarshipNameOmit = Omit<Starship, 'name'>
