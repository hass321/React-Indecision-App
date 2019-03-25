function square(x){
    return x * x;
};

console.log(square(6));

//'Arrow Function ' 
const arrowSquare = x => {
    return x * x ;
};

console.log(arrowSquare(8));

//  Or
const arrowSquare2 = x => x * x ;

console.log(arrowSquare2(10));

// CHALLANGE 

// Regular Arrow Function
const getFirstName = name => {
    return name.split(' ')[0];
}

console.log(getFirstName('Muhammad Hassan'));

// Shorthand Arrow Function
const getFirstName2 = name => name.split(' ')[0];

console.log(getFirstName2('Hassan Tasleem'));