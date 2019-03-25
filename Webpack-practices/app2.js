// import './utils';
import substract, { square, add, percentage } from './utils';
import senior, { isAdult, canDrink } from './person';


console.log('app.js is running!');

//From utils.js file
// console.log('from util.js',square(4));
// console.log('from util.js',add(5,100));
// console.log('from util.js',percentage(250,178));
// console.log('from util.js',substract(100,81));

//From person.js file
console.log('from person.js',isAdult(16));
console.log('from person.js',canDrink(21));
console.log('from person.js',senior(55));