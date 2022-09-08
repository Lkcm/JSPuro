console.log("WeakMap")

let obj = { id: '122'}


const WeakMapa = new WeakMap;
const obj2 = {};
WeakMapa.set(obj, 'valor 1');
WeakMapa.set(obj2, 'valor 2')

console.log(WeakMapa.get(obj))
console.log(WeakMapa.get(obj2)) 