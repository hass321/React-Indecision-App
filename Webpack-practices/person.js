const isAdult = (age) => age >= 18 ;
const canDrink = (age) => age > 20 ;

//for default export
const isSenior = age => age > 54;


export { isAdult, canDrink, isSenior as default };