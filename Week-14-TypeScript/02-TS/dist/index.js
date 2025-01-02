"use strict";
const user = {
    name: "Mayank Arya",
    age: 19,
    address: {
        city: "delhi",
        country: "IN",
        pincode: 123123
    }
};
if (user.age > 18) {
    console.log("Can Vote");
}
else {
    console.log("Can't Vote");
}
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const person1 = new Employee("Mayank", 19);
console.log(person1.greet("Hello"));
const person3 = {
    name: "Arya",
    age: 20
};
function isLegal(person3) {
    if (person3.age > 18) {
        return true;
    }
    return false;
}
const ans = isLegal(person3);
console.log(ans);
function filteredUsers(users) {
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
    },]));
