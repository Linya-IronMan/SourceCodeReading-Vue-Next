// interface WeakMap<K extends object, V> { }
var reactiveMap = new WeakMap();
var proxyMap = reactiveMap;
var a = {};
var b = new Proxy(a, {});
var existingProxy = proxyMap.set(a, b);
console.log(existingProxy, '========');
