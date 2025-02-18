class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    greet(){
        return console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`);
    }
}

class Employee extends Person{
    constructor(name, age, jobTitle){
        super(name, age);
        this._jobTitle = jobTitle;
    }
    
    jobGreet(){
        return console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`);
    }
}

const alice = new Person("Alice", 25);
alice.greet(); // This should log 'Hello, my name is Alice and I am 25 years old.'

const bob = new Employee("Bob", 30, "Manager");
bob.jobGreet(); // This should log 'Hello, my name is Bob, I am 30 years old, and my job title is Manager.'

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;