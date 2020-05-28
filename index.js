//hash tables
//gitbook example (not functional, .findPrime() is not a function)

// class Hashtable {
//     constructor(size = 100) {
//         this.table = new Array(size);
//     }
//     computeHash (string) {
//         let H = this.findPrime(this.table.length);
//         let total = 0;
//         for (let i = 0; i < string.length; i++) {
//             total += H * total + string.charCodeAt(i);
//         }
//         return total % this.table.length;
//     }
//     put (item) {
//         let key = this.computeHash(item);
//         return !this.table[key] ? this.table[key] = item : false;
//     }
//     remove (item) {
//         let key = this.computeHash(item);
//         return this.table[key] = undefined;
//     }
//     search (item) {
//         let key = this.computeHash(item);
//         return this.table[key] === item;
//     } size () {
//         let counter = 0;
//         for (let i = 0, len = this.table.length; i < len; i++) {
//             if (this.table[i]) {counter++;}
//         }
//         return counter;
//     }
//     isEmpty () {
//         for (let i = 0, len = this.table.length; i < len; i++) {
//             if (this.table[i]) {return false;};
//         }
//         return true;
//     }
// }
// let hashTable = new Hashtable(7)
// console.log(hashTable)
// hashTable.put("add 1 i guess")
// console.log(hashTable)


class HashTable {
    constructor(){
        this.anyFunc
        this.table = {}
    }
    put(item) {

    }
    remove(item){

    }
    get(item){

    }
}
function createHashFunction(key){
    if(typeof key === Boolean){
        return key
    }
    const keyChain = this.toString(key)
    let hash = 0
    for(let i = 0; i < keyChain.length; i++) {
        
    }
}
console.log(createHashFunction())

let hashTable = new HashTable()

console.log(hashTable)


//classes
// A class is a template that can be applied to an object

let firstNm = ["Jordan"]
let lastNm = ["Huitema"]
let year = [1998]
class Student {
    constructor(firstName,lastName, year, age){ //constructors are special functions that run when the class is applied to a object
        this.firstName = firstName
        this.lastName = lastName
        this.year = year
        this.age = age
    }
    print(input){                               //functions do not need to be declared within a class, they are... 'assumed' in a sense
                                                //functions are called methods when inside a class
        console.log(input)
    }
    studentAge(){
        return `${this.firstName} is ${2020 - this.year} years old`
    }
    fullName(){
        return `Full name is ${this.firstName} ${this.lastName}`
    }
    email(){
        return `Email is ${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}@gmail.com`
    }
}

let students = new Student(firstNm,lastNm,year)     //applys Students class template to students obj and uses firstNms and lastNms as data to input
console.log(students)

students.print("Beans")                                 //you can call a func within a obj the same way you would access a property 

let studentsTwo = new Student("Ali","Kahwaji", 1993)
console.log(studentsTwo)

console.log(studentsTwo.studentAge())
console.log(studentsTwo.fullName())
console.log(studentsTwo.email())

//calculator

class Calc {
    add(a,b){
        return a + b
    }
    sub(a,b){
        return a - b
    }
    mul(a,b){
        return a*b
    }
    div(a,b){
        return a/b
    }
}
let calc = new Calc
console.log(calc.add(10,5))
console.log(calc.sub(10,5))
console.log(calc.mul(10,5))
console.log(calc.div(10,5))
