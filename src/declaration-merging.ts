interface Cart{
    calculateTotal(): number;
}
interface Cart{
    x: number;
}
interface Cart{
    calculateTotal(options: {discountCode: number}): number;
}

let myCart : Cart = {
    x: 1,
    calculateTotal(options?: {discountCode: number}){
        return 1;
    }

}