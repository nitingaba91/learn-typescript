// import * as multiplyModule from './multiply'
import multiply, {multiplyByTwo as mBy2, HelloWorld} from './multiply'
// import multiply, {multiplyByTwo} from './multiply'

const a = 5;
const b = 3;

// console.log(`${a} * ${b} = ${multiplyModule.default(a,b)}`)
// console.log(`${a} * ${b} = ${multiplyModule.multiplyByTwo(a)}`)
console.log(`${a} * ${b} = ${multiply(a,b)}`)
console.log(`${a} * 2 = ${mBy2(a)}`)