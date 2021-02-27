// interface WeakMap<K extends object, V> { }

interface WeakMap<K extends object, V> {
    delete(key: K): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
}

interface WeakMapConstructor {
    new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
    readonly prototype: WeakMap<object, any>;
}
declare var WeakMap: WeakMapConstructor;

const reactiveMap = new WeakMap<any, any>()

const proxyMap = reactiveMap

let a = {}
let b = new Proxy(a, {})
const existingProxy = proxyMap.set(a, b)


console.log(existingProxy, '========')
