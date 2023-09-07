// set a type signature

// set up a type signature

type Filterss = {
    <T> (array: T[], f: (item: T) => boolean): T[]
}

const filt: Filterss = (array, f)  => {
    let result = []
    for (let i = 0; i < array.length; i++){
        if (f(array[i])){
            result.push(array[i])
        }
    }

    return result
}

console.log(filt([1, 2, 3, 4], _ => _ > 3))

console.log(filt(['mary', 'esther', 'mona'], _ => _.startsWith('m')))