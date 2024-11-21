// npx tsc -b (Command use to Compile the type script code)


//Interface
interface Address {
    city : string ,
    country : String ,
    pincode : number
}

interface User  {
    name? : string ,
    age : number ,
    address : Address
    
}

interface Office {
    address : Address
}

let user : User = {
    name : "Mayank Arya" ,
    age : 20 ,
    address : {
        city : "Delhi" ,
        country : "India" ,
        pincode : 123456
    }
}

let user2 : User = {
    name : "Arya" ,
    age : 12 ,
    address : {
        city : "Nodia" ,
        country : "India" ,
        pincode : 126547
    }
}

function isLegal(user : User) : boolean {
    if (user.age >= 18) {
        return true
    }
    else{
        return false
    }
}

const ans = isLegal(user);
if (ans) {
    console.log("Right To Vote");
}
else{
    console.log("Can't Vote");
}

// class implements interface
interface People {
    name: string;
    age: number;
    greet(phrase: string): void;
}

let person : People = {
    name : "Mayank Arya" ,
    age : 19 ,
    greet: () => {
        return "Hi"
    },
}

class Employees implements People {
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

// type 
// intersection 
type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  
