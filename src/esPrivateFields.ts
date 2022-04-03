class Robot {
    #name: string;
    
    constructor(name: string) {
        this.#name = name;
    }

    getName() {
        return this.#name;    
    }
}

class AdvancedRobot extends Robot {
    #name : string;

    constructor (name: string) {
        super(name);
        this.#name = `Advanced ${name}` ;
    }

    getAdvancedRobotName() {
        return this.#name;
    }
}

const robot = new AdvancedRobot('Jack')
console.log('poarent name', robot.getName())
console.log('subclass name', robot.getAdvancedRobotName())