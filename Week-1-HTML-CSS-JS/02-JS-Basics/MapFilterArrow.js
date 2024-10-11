// Arrow function 

const sum = (a,b) => {
    return a + b;
}

console.log(sum(1,3));

//Map

/*
Given an array , give me back a new array 
Where every value is multiplied of 2
Input  - [1 , 2 , 3 , 4 , 5]
Output - [2 , 4 , 6 , 8 , 10]
*/

const input = [1 , 2 , 3 , 4 , 5];
const ans = input.map((i) =>{
    return i*2;
});
console.log(ans);

//Filter

/*
Given  an input array , give me back all the even values.... 
Input  - [1,2,3,4,5,6]
Output - [2,4,6]
*/

const arr = [1,2,3,4,5,6]
const result = arr.filter((n) =>{
    if (n % 2 == 0) {
        return true;
    }
    return false;
})
console.log(result);