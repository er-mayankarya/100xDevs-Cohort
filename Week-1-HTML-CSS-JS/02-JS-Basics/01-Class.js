//Classes in Javascript
class Rectangle{
  constructor(height , width){
    this.height = height;
    this.width = width;
  }

  area(){
    return this.height * this.width;
  }
}

const rect = new Rectangle(5,2);
const area = rect.area();
console.log(area);



//Some more pre-deifined Classes

//Date Class 
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format

//Map Class
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));
