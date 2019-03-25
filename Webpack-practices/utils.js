console.log('utils.js is running..');

const square = x => x * x ;

const add = (a,b) => a + b ;

const substract = (a,b) => a - b ;

//export inline

export const percentage = (total,obtain) => obtain * 100 / total + '%';

//exports have two type named and default

//  'name export'
export { square, add, substract as default };