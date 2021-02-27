let a = {
    name: 'Karla',
    age: 18,
    tags: ['student', 'job', 'teacher']
}

const baseHandler = {
    get(target, proto, receiver) {
        console.log('getter', target, proto)
        return Reflect.get(target, proto, receiver)
    },

    set(target, proto, value, receiver) {
        console.log('setter', target, proto, value)
        const res = Reflect.set(target, proto, value, receiver)
        console.log('setter - reflect set', res)
        return res;
    }
}
let p = new Proxy(a, baseHandler)

// let pp = new Proxy(p, baseHandler)

console.log('p =====',p)
// console.log('pp =====',pp)

// pp.name = 'Linay'

// p.tags.push('7788454')
// console.log(p.tags.slice(0, 1))



