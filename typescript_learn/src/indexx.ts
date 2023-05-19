import { readFile } from "fs"

function appendAndReadPromise(path: string, data: string): Promise<string>{
    return appendPromise(path, data)
    .then(() => readPromise(path))
    .catch(error => console.error(error))
}


type Executor<T, E extends Error> = (
    resolve: (result: T) => void,
    reject: (error: E) => void
 ) => void

function readFilePromise(path: string): Promise<string>{
    return new Promise((resolve, reject) => {
        readFile(path, (error, result) => {
            if (error) {
                reject(error)
            } else{
                resolve(result)
            }
        })
    })
}
