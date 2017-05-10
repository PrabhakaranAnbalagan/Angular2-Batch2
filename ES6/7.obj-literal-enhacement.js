"use strict"

// es5

// let person = {
//     name: 'Nag',
//     age: 32,
//     sayName: function () { }
// };

// or

// Es6

// let person = {
//     name: 'Nag',
//     age: 32,
//     sayName() {}
// };

//-----------------------------------------


let name = "Nag";
let age = 32;

// es5


// let person = {
//     name: name,
//     age:age
// };

// es6

// let person = {
//     name,
//     age
// }

//-----------------------------------------



// let dynamicField = "name";

// let person = {
//     ["cts-" + dynamicField]: 'Nag',
//     "say Name" () {
//         console.log(this["cts-" + dynamicField]);
//     }
// }

// person["say Name"]();



//----------------------------------------------


// .js objects are extensible

// let person = {
//     name:'Nag'
// };

// person.age = 32;


// .js objects are configurable

// let person = {
//     name: 'Nag',
//     age:32
// };

// delete person.age;


//--------------------------------------



let person = {
    name: 'Nag',
    age:32
};
// Object.preventExtensions(person);
// Object.seal(person);
Object.freeze(person);

// person.blaProp = "blaValue";
// delete person.name;
person.name = "";

