console.log("Hello Typescript");

let b = {
    c: "x"
}

console.log(b.c);

const y: {z: number} = {
    z: 12
}

console.log(y.z);

let f: {
    g: number
    h?: string
    [key: number]: boolean
}

f = {g: 5, h: 'd', 10: true};
console.log(f);

// using index signatures
let airplaneSeatingAssignments: {
    [seatNumber: string]: string
} = {
    "34D": "Boris Cherny",
    "34E": "Bill Gates"
}

let user: {
    readonly firstName: string
} = {
    firstName: "abby"
}

console.log(user.firstName);
//user.firstName = "abbey with an e"; gives an error since user.firstName is readonly

// type aliases
type Age = number;

type Person = {
    name: string,
    age: Age
}

let age: Age = 55;
let driver: Person = {
    name: "James Mary",
    age: age
}

console.log(driver.age); // 55

// the above can also be rewritten as without the type alias as in
// let age = 55;
// let driver: Person = {
    //name: "James Mary",
    //age:age 
//}

type Cat = {name: string, purrs: boolean};
type Dog = {name: string, barks: boolean, wags: boolean};
type CatOrDogorBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

// Cat 
let a:CatOrDogorBoth = {
    name: "Bonkers", 
    purrs: true
}

// Dog
a = {
    name: "Domino", 
    barks: true, 
    wags: true
}

// both
a = {
    name: "Donkers",
    barks: true,
    purrs: true,
    wags: true
}

console.log(a);


// some array stuff
let arr = [1, 2, 3, 5]
// arr.push('e'); won't work (arr = number [])

let arr2: any[] = []
arr2.push(1)
arr2.push('e')
console.log(arr2); // works 'cos arr2 = any[]



arr2.push(true); 

// tuples

let t : [string, string, number] = ['malcolm', 'gladwell', 196];

let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire'];

let list: [number, boolean, ...string[]] = [1, true, 'Sara', 'Tali', 'Chloe'];


// readonly arrays

let as: readonly number[] = [1, 2, 3]
let bs: readonly number[] = as.concat(4);
console.log(as);
console.log(bs);

let three = bs[2];
console.log(three);
//as[4] = 5;

// enums
enum Language{
    English,
    Spanish,
    Russian
}


// functions
function log(message: string, userId?: string){
    let time = new Date().toLocaleDateString();
    console.log(time, message, userId || "Not signed in")
}

log("page loaded");
log("User signed in", 'manofletters');

function add(a: number, b: number){
    return a + b;
}

console.log(add(10, 11));
console.log(add.apply(null, [10, 11]))
console.log(add.call(null, 10, 11))
console.log(add.bind(null, 10, 11)())

// generator functions
function* createFibonacciGenerator() {
    let a = 0
    let b = 1

    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

let fibonacciGen = createFibonacciGenerator()
console.log(fibonacciGen.next())
console.log(fibonacciGen.next())
console.log(fibonacciGen.next())
console.log(fibonacciGen.next())

// call signatures
/*
type Log = {message: string, userId?: string} => void

let log: Log = {
    message, 
    userId = "Not signed in"
} => {

} */

// contextual typing
function times(
    f: (index: number) => void,
    n: number
){
    for (let i = 0; i < n; i++){
        f(i);
    }
}

times(n => console.log(n), 4);


// overloaded functions
type Reserve = {
    (from: Date, to: Date, destination: string): any
    (from: Date, destination: string): any
}

let reserve: Reserve = (
    from: Date,
    toOrDestination: Date| string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined){
        // Book a one way trip
    }
    else if (typeof toOrDestination === 'string') {
        // Book a two way trip
    }
}

// custom error types
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}


function ask(){
    return prompt("When is your birthday")
}


/**
 * @throws {InvalidDateFormatError} The user entered their birthday incorrectly
 * @throws {DateIsInTheFutureError} The user eneterd a birthday in the future
 */
function parse(birthday: string): Date | null{
    let date = new Date(birthday)

    // validate the date
    if (!isValid(date)){
        throw new InvalidDateFormatError("Enter a date in the form YYYY/MM/DD")
    }

    if (date.getTime() > Date.now()){
        throw new DateIsInTheFutureError("Are you a time-traveller?")
    }
    return date
}


function isValid(date: Date): boolean{
    return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
}

try{
    let date = parse(ask())
    console.info("Date is", date?.toISOString())
} catch(e) {
    if (e instanceof InvalidDateFormatError) {
        console.error(e.message)
    }
    else if (e instanceof DateIsInTheFutureError){
        console.error(e.message)
    }
    else {
        throw e
    }
}

