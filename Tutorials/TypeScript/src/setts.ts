class MySet<T>{
    private data: T[] = []

    constructor() {
        this.data = []
    }

    add(value: T){
        if (this.has(value)){
            return
        }
        this.data.push(value)
    }

    has(value: T): boolean{
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i] == value){
                return true
            }
        }
        return false
    }
}

let s = new MySet()
s.add(1)
s.add(2)
console.log(s.has(5))