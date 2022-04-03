type Properties = 'propA' | 'propB';
type MappedType<T> = {
   readonly [p in keyof T]: T[p]; 
}

type MyNewType = MappedType<{a:'a'}>


type Pick1<T, Properties extends keyof T> = {
    [P in Properties] : T[P]
};

type MyNewType2 = Pick1<{a:'a', b: 'b'}, 'a'>;


type Record1<K extends keyof any, T> = {
    [P in K]: T;
};
const somerecord: Record<string, number> = {

}

somerecord.apples = 10