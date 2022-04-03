type someType = string;
type MyConditionalType = someType extends string ? string : null;

function someFunction<T>(value: T) {
    type A = T extends boolean ? "TYPE A": T extends string ? 'TYPE B' : T extends number ? 
     'TYPE C' : 'TYPE D'
    const someOtehrFunction = (
        someArg: T extends boolean ? 'TYPE A' : 'TYPE B'
    ) => {
        const a: 'TYPE A' | 'TYPE B' = someArg;
    }
    return someOtehrFunction;
}

const result = someFunction(true);

type StringorNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;

type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

/*

'a' extends 'a' | 'b' ? never : 'a' => never
'b' extends 'a' | 'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => 'c'
*/