interface stackOperations<T> {
    length(): number
    pop(): T | StackEmptyError
    isEmpty(): boolean
    push(value: T): void

}


class StackEmptyError extends Error {
    constructor(){
        super("The stack is empty")
        this.name = "stackEmptyError"
    }
}


class Stack<T> implements stackOperations<T>  {
    private data: T[] = []

    constructor(){
        this.data = []
    }


    length() {
        return this.data.length
    }

    pop(): T | StackEmptyError {
        if (this.isEmpty()){
            return new StackEmptyError()
        }

        let e = this.data.pop()
        return e as T

    }

    isEmpty() {
        return this.data.length === 0
    }

    push(value: T){
        this.data.push(value)
    }
}


let m = new Stack()
m.push(1)
m.push(2)
m.push(3)
m.push('ade')
console.log(m.length())
console.log(m.pop())
console.log(m.pop())