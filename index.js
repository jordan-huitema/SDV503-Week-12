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
