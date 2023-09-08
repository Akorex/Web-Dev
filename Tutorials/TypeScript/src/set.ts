interface setOperations<T> {
    add(value: T): void
    has(value: T): boolean
}

class MyInterfaceSet<T> implements setOperations<T>{
    private data: T[] = []

    constructor(){
        this.data = []
    }

    add(value: T){
        if (this.has(value)){
            return
        }
        this.data.push(value)
    }

    has(value: T){
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i] == value){
                return true
            }
        }
        return false
    }
}

let p = new MyInterfaceSet()
p.add(1)
p.add(2)
console.log(p.has(5))