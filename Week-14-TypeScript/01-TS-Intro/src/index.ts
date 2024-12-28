function greet(firstName: string){
    console.log("hello " + firstName);
}

greet("Mayank Arya")

function sum(a : number , b: number){
    return a + b;
}

console.log(sum(1,2));

interface People {
    name : string ,
    age : number ,
    greet? : () => string
}

const person : People = {
    name : "Mayank" ,
    age : 20 ,
}