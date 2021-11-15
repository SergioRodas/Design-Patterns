class NotSingleton {
    constructor(name) {
        this.name = name
    }
}

const a = new NotSingleton('a')
const b = new NotSingleton('b')
console.log(a)
console.log(b)

class Singleton {
    constructor(name) {
        
        if (Singleton.instancia) {
            console.log('Creada')
            return Singleton.instancia
        }

        this.name = name

        Singleton.instancia = this
    }
}

const c = new Singleton('c')
console.log(c)
c.new_property = 'c property'
const d = new Singleton('d')


console.log(d)
