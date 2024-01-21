// set up a type signature

type Filters = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean):string[]
    (array: object[], f: (item: object) => boolean): object[]
}

const filter: Filters = (array, f) => {
    let result = []
    for (let i = 0; i < array.length; i++){
        let item = array[i]
        if (f(item)){
            result.push(item)
        }
    }

    return result
}

console.log(filter([1, 2, 3, 4], _ => _ > 3))