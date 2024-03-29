type classConstructor<T> = new(...args: any[]) => T

function withEZDebug<C extends classConstructor<{
    getDebugValue():object
    }>>(Class: C){
        return class extends Class{
        debug(){
            let Name = Class.constructor.name
            let value = this.getDebugValue()
            return Name + '(' + JSON.stringify(value) + ')'
        }
    }
}

class HardToDebugUser{
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        }
    }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
console.log(user.debug())