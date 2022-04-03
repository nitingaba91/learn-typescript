interface IA {
   a: number
}
interface IB {
    b: number
}

function IAB(objA: IA & IB) {
    return objA.a + objA.b;
}
