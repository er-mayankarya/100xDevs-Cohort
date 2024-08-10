let fs = require('fs');

const contents = fs.readFileSync('C:\\a.txt' , 'utf-8');
console.log(contents);

const contents2 = fs.readFileSync('C:\\b.txt' , 'utf-8');
console.log(contents2);