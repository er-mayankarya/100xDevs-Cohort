"use strict";
// npx tsc -b (Command use to Compile the type script code)
let user = {
    name: "Mayank Arya",
    age: 20,
    address: {
        city: "Delhi",
        country: "India",
        pincode: 123456
    }
};
let user2 = {
    name: "Arya",
    age: 12,
    address: {
        city: "Nodia",
        country: "India",
        pincode: 126547
    }
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = isLegal(user);
if (ans) {
    console.log("Right To Vote");
}
else {
    console.log("Can't Vote");
}
let person = {
    name: "Mayank Arya",
    age: 19,
    greet: () => {
        return "Hi";
    },
};
let greeting = person.greet();
console.log(greeting);
