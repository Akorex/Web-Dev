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