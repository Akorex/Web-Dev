class stackEmptyError extends Error {
    constructor(){
        super("The stack is empty")
        this.name = "stackEmptyError"
    }
}

type MyStackOperations<T> = {
    length: () => number;
    pop: () => T | stackEmptyError;
    isEmpty: () => boolean;
    push: (value: T) => void;
};

class MyStack<T> implements MyStackOperations<T> {
    private data: T[] = [];

    constructor() {
        this.data = [];
    }

    length() {
        return this.data.length;
    }

    pop() {
        if (this.isEmpty()) {
            return new stackEmptyError();
        }

        return this.data.pop() as T;
    }

    isEmpty() {
        return this.data.length === 0;
    }

    push(value: T) {
        this.data.push(value);
    }
}

if (require.main === module){
    let m = new MyStack()
m.push(1)
m.push(2)
m.push(3)
m.push('ade')
m.push('bolu')
console.log(m.length())
console.log(m.pop())
console.log(m.pop())

}
