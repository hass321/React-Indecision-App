var nameVar = "Hassan";
var nameVar = "Waqas";
console.log('nameVar', nameVar);

let nameLet = "Fahad";
nameLet = "Usama";
console.log('nameLet', nameLet);

const nameConst = "Hassan";
// nameConst = 'Chauhan';
console.log('nameconst', nameConst);

//Function 'scope'
function getCarName(){
    let car = 'Nissan';
    return car;
}

let carName = getCarName();
console.log(carName);


//Block 'Scoping'
var varName = 'Var Name';

if(varName){
    var firstName = varName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

//let 'scope'
let letName = 'lets Name';
let secondName;

if(letName){
    secondName = letName.split(' ')[0];
    console.log(secondName);
}

console.log(secondName);

//const 'scope'
const constName = 'const Name';
var thirdName;

if(constName){
    thirdName = constName.split(' ')[0];
    console.log(thirdName);
}
console.log(thirdName);