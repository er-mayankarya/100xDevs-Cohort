//Interface & its syntax
interface User{
    name : string ;
    age : number ;
    address? : {               // '?' is used to make field optional.
        city : string;
        country : string;
        pincode : number
    }
}

const user : User = {
    name : "Mayank Arya" ,
    age : 19 ,
    address : {
        city : "delhi" ,
        country : "IN" ,
        pincode : 123123
    }
}

if (user.age > 18) {
    console.log("Can Vote");
}else{
    console.log("Can't Vote");
}

//Inteface & implementation of it with class
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const person1 = new Employee("Mayank" , 19);
console.log(person1.greet("Hello"));


//Types 
type People = {
    name : string ;
    age : number
}

const person3 : People = {
    name : "Arya" ,
    age : 20 
}

function isLegal(person3 : People){
    if (person3.age > 18) {
        return true
    }
    return false
}

const ans = isLegal(person3)
console.log(ans);


//Unions , Intersections - Read them through lecture slides.

// Array in ts arrayName : number[] , sting[] etc
interface Users {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: Users[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));


// emuns in TS : used to define multiple constant values in a one varibale
// Generics in TS : Go Through slides to understand them & google it.