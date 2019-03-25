// 1. Argument object - no longer bound with arrow function


//Normal Function
const add = function (a,b){
    console.log(arguments);
    return a + b;
}

console.log(add(5,6,50));

// Arrow Function

const arrowAdd = (a,b) => {
    // console.log(arguments);
    return a + b;
}

console.log(arrowAdd(5,6));

// 2. 'This' Keyword - no longer bound

const user = {
    name: 'Hassan',
    cities: ['Karachi','Lahore','Islamabad'],
    printcities : function(){
        this.cities.forEach( city =>{
            console.log(this.name + (city == 'Karachi' ? ' has lived in ' : ' not lived in ') + city);
        });
    }
};

user.printcities();

//Challenge area 

const multiplier = {
    numbers: [10, 20 , 30],
    multiplyBy: 3,
    multiply: function(){
        return this.numbers.map((number) => {
            return number * this.multiplyBy
        });
    }
};

console.log(multiplier.multiply());