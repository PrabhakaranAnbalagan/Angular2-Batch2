/*

  A closure is a function having access to the parent scope,
  even after the parent function has closed.

  // why we need closures ?

  1. to abstract public-behav of any module.
  2. while executing any func async , to access parent scoped data

*/

// function teach(sub){
//   console.log('teaching '+sub);
//   var notes=sub+"-notes";
//   function learn(){
//     console.log('leaning with '+notes);
//   }
//   //learn();
//   console.log('teaching end...');
//   return learn;
// }



// var learnFunc=teach('.js'); // teach-context

// learnFunc();
// learnFunc();
// learnFunc();
// learnFunc();


//-----------------------------------------------------

// closure : use-1


// e.g counter module

// function init() {

//   var count = 0; // private


//   // public  
//   function doCount() {
//     count++;
//   }

//   function getCount() {
//     return count;
//   }

//   return {
//     doCount,
//     getCount
//   };


// }

// var counter = init();


//-----------------------------------------------------



// Use-2


function Person(name, age) {
  this.name = name;
  this.age = age;

  var self = this;
  setInterval(function () {
    self.age++;
    console.log(self.name + "->" + self.age);
  }, 1000);

}

var p = new Person('Ria', 0);