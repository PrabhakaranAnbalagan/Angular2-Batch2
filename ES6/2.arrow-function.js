//  


// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function () { 
//         console.log('im '+this.name);
//     }
// }

// var p1 = new Person("Nag", 32); // constructor invocation ( this ==> new-obj)
// var p2 = new Person("Ria", 2); // constructor invocation


//--------------------------------------------------------------------


// dynamic function-binding

// var greetLib = {
//     sayName: function (message, from) {
//         console.log(message + ' im ' + this.name + " - " + from);
//     }
// };


// var p1 = {
//     name: 'Nag'
// };
// var p2 = {
//     name: 'Ria'
// };
// var emp1 = {
//     name: 'cts'
// };


// greetLib.sayName(); // ( this ==> greetLib)

// way-1

// greetLib.sayName.call(p1,"Hello","CHN"); // ( this ==> person)
// greetLib.sayName.call(p2,"Hi","BLR"); // ( this ==> person)
// greetLib.sayName.call(emp1,"Hey","Universe");


// way-2

// greetLib.sayName.apply(p1,["Hello","CHN"]); // ( this ==> person)
// greetLib.sayName.apply(p2,["Hi","BLR"]); // ( this ==> person)
// greetLib.sayName.apply(emp1,["Hey","Universe"]);


// way-3

// let newF = greetLib.sayName.bind(p1, "Hello", "CHN");
// newF();
// newF();
// newF();

// let newFF = greetLib.sayName.bind(emp1);

// newFF("hey", "IND");
// newFF("hey","Unviverse");

//--------------------------------------------------



// in .js-lang , we can invoke function in 4 ways

/*

    1. function invocation ( this ==> global-obj, if it is not binded func)
    2. method invocation  ( this ==> invoker obj)
    3. constructor invocation ( this ==> new-obj)
    4. call/apply/bind invocation ( this ==> arg-obj)

*/

//--------------------------------------------------


// Quiz-1


// function Person(name) {
//     this.name=name;
// }

// Person("GLOBAL");

//--------------------------------------------------


// Quiz-2



// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         let self = this;

//         function doLearn() {
//             //console.dir(this);
//             console.log(this.name + ' learning .js from ' + self.name);
//         }
//         //doLearn();
//         let emp = {
//             name: 'cts'
//         };
//         doLearn.call(emp);
//     }
// };

// // trainer.doTeach();
// // let oldTrainer = trainer;
// // trainer = { name: 'Ria' };
// // oldTrainer.doTeach();

// trainer.doTeach();

// let newTrainer = {
//     name: 'Ria'
// };
// trainer.doTeach.call(newTrainer);


//--------------------------------------------------

// Arrow function


// syntax

// let getPrice = function () { return 100.00 };

// let getPrice = () => 100.00;
// let getPrice = (count) => 100.00 * count;
// let getPrice = count => 100.00 * count;
// let getPrice = (count,tax) => (100.00 * count)+tax;
// let getPrice = (count,tax) => { 
//     let result = count * 100 + tax;
//     return result;
// };



// why we need arrow func ?



// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");

//         // let askQues = function (ques) { console.dir(this); console.log(this.name + " answering " + ques); };
//         let askQues = (ques) => { console.dir(this); console.log(this.name + " answering " + ques); }

//         console.log(this.name + " finished teaching.");

//         return askQues;
//     }
// };


// let askQuesFunc = trainer.doTeach();
// askQuesFunc("ques-1");

// let newTrainer = { name: 'Ria' };
// // askQuesFunc.call(newTrainer,"ques-2");

// let askQues = trainer.doTeach.call(newTrainer);
// askQues("ques-3");



// advantages of arrow function

/*

    --> by default a.f bound to current execution context
    --> we can't to any object dynamically

*/

//-----------------------------------------------------------




// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('invoice-'+this.num+" processed");
//     }
// };

// let invoice = {
//     num: 123,
//     process: () => {
//         console.log('invoice-'+this.num+" processed");
//     }
// };


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('invoice-' + this.num + " processed partially");
//         //return function () { console.log('invoice-' + this.num + " processed completly"); };
//         return  () => { console.log('invoice-' + this.num + " processed completly"); };
//     }
// };

// let completeProcess = invoice.process();
// completeProcess();



// let func = () => { console.log(this) };



///--------------------------------------


// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // let self = this;
//     // setInterval(function () { console.dir(this); self.age++; console.log(self.age);},1000);

//     setInterval(() => {
//         console.dir(this);
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }

// var p = new Person('Ria', 0);

///--------------------------------------


/*

    IMP-NOITE: ALL EVENT-HANDLERS EXECUTED BY EVENTEMITER OBJ

*/

let teachBtn = document.querySelector('.btn-primary');

let tnr = { name: 'Ria' };

let teachService = {
    doTeach: function () {
        console.dir(this);
        console.log(this.name+" teaching .js");
    }
};

// teachBtn.addEventListener('click',teachService.doTeach);

// teachBtn.addEventListener('click', function () { 
//     teachService.doTeach.call(tnr);
// });

// or

teachBtn.addEventListener('click',teachService.doTeach.bind(tnr));



