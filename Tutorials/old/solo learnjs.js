class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let john = new Person("John", 25);
if (typeof Person==typeof john) 
    console.log(1);
else
    console.log(0);