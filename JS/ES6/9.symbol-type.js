


 // Symbol ==> new primitive type


    // unique and immutable value , used as identifier property to .js-objects

// ---------------------------------------------

// let s = Symbol.for('key1'); 
// let s1 = Symbol.for('key1');    

// ---------------------------------------------


// let arr = ["item-1", "item-2"];


let emp1 = { name: 'A', [Symbol.for('java')]:"Java,Spring" }
let emp2 = { name: 'B', [Symbol.for('js')]:"JS Angular2" }
let emp3 = { name: 'C', [Symbol.for('java')]:"Java folk" }
let emp4 = { name: 'B', [Symbol.for('js')]:"JS folk" }


if (emp1[Symbol.for('java')]) {
    console.log(emp1[Symbol.for('java')]);
}

// ---------------------------------------------