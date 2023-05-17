// polymorphism
/*
type Filter = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
    (array: object[], f: (item: object) => boolean): object[]
}*/

// a better way to do the above is with generic types
type Filter = {
    <T> (array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
    let result = []

    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (f(item)){
            result.push(item)
        }
    }
    return result
}

console.log(filter([1, 2, 3], _ => _ > 2))

/*
function map(array: unknown[], f:(item: unknown) => unknown): unknown[] {
    let result = []

    for (let i =0; i < array.length; i++){
        result[i] = f(array[i])
    }
    return result
}
*/

function map<T, U> (array: T[], f: (item: T) => U): U[]{
    let result = []
    for (let i = 0; i < array.length; i++){
        result[i] = f(array[i])
    }
    return result
}

console.log(map([1, 2, 3, 4], _ => _ * _))


// interfaces
interface User {
    name: string
}

interface User{
    age: number
}

let u: User = {
    name: "Ashley",
    age: 10
}

console.log(u.age);

interface Animal{
    readonly name: string
    eat(feet: string): void
    sleep(hours: number): void
}


class Bird implements Animal{
    name = "Whiskers"
    eat(food: string) {
        console.info("Ate some", food, ". MMM")
    }
    sleep(hours: number){
        console.info("Slept for", hours, " hours")
    }
}