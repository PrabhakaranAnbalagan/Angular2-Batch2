// Es5


/**
 *
 *  how to implement inheritance ?
 *
 *  --> using prototypes
 *
 *   child-object ===> parent-object ( prototype )
 *
 */

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // this.sayName=function(){
//     //     console.log('im '+this.name);
//     // }
//     // this.sayAge = function () {
//     //     console.log('im '+this.age);
//     // } 
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age);
// }


// var p1 = new Person('Nag', 32);
// var p2 = new Person("Ria", 2);

//--------------------------------------------

// function Employee(name, age, salary) {
//     Person.call(this,name,age);
//     this.salary = salary;
// }
// Employee.prototype = new Person();
// Employee.prototype.saySalary = function () {
//     console.log('i get '+this.salary);
// }

// let emp1 = new Employee('Nag', 32, 10000.00);


//--------------------------------------------



// Es6


class Person {

    constructor(name, age) {
        console.log('Person::constructor()');
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age);
    }

}

// let p = new Person('Nag',32);

class Employee extends Person {

    constructor(name, age, salary) {
        super(name, age);
        console.log('Employee::constructor()');
        this.salary = salary;
    }
    saySalary() {
        console.log("i get " + this.salary);
    }
    getBonus() {
        return this.salary * 0.02;
    }
}

// let emp = new Employee("Nag", 32, 1000);

class Boss extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getBonus() {
        return this.salary * 0.2 + super.getBonus();
    }
}

let boss = new Boss("Nag", 32, 1000);


class Abc{

    // class -level methods ( static methods )
    static staMethod() {
        console.log('sta Method...');
    }    
}

Abc.staVar = 12;

Abc.staMethod();

//-----------------------------------------


class MyClass{

    _priMethod() {
        console.log('pri method..');
    }    

}