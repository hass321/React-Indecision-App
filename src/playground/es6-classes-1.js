
// Person Class
class Person{
    constructor(name = "Anonymus",age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi!my name is ${this.name}`;
    }
    
    getDescription(){
        return `${this.name} is ${this.age} ${this.age > 1 ? 'Years' : 'Year'} old`;
    }
}

//Student Class extends from Person class
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    getDescription(){
        let description = super.getDescription(); 
        
        let finalDescription = description + `.Major subject is ${this.major}`;

        return this.major ? finalDescription : description;
    }
}

//Traveler Class extends from Person Class

class Traveler extends Person{
    constructor (name, age, location){
        super(name, age);
        this.location = location;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        return this.location ? greeting + `.I'm from ${this.location}` : greeting;
    }
}

const me = new Traveler('Hassan',26,'Karachi');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());