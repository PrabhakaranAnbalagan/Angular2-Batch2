
//A. Array destructuring

// let amounts = [100, 200, 300];

// manual destructuring

// let min = amounts[0];
// let avg = amounts[1];
// let max = amounts[2];


// Es6

// let [min, avg, max] = amounts;

// or

// let min, avg, max;
// [min, avg, max] = amounts;

// let [min] = amounts;
// let [min, , max] = amounts;


// let amounts = [100, 200];
// let [min, avg, max = 500] = amounts;


// let amounts = [100, 200, [300, 400]];

// let [min, avg, [max1, max2]] = amounts;

//-----------------------------------------------------------

//B. Object destructuring

let person = { name: 'Nag', age: 32 };

// manual
// let name = person.name;
// let age = person.age;


// let { name, age } = person;
// let { name: myName, age: myAge } = person;

let myName;
let myAge;
({ name: myName, age:myAge }=person);




// imp-note : Any iterable .js-obj is destructarable