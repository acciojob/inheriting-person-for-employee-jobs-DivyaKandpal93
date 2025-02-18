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

const obj2 = new Employee("Vivek",32,"manager");
obj2.jobGreet();
obj2.greet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;