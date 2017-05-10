"use strict"

/*
    execution-context or scope
    ---------------------------

    memory/stack-frame with args & locals to execute instruction

    phase-1: creation

        any variable declared with 'var' keyword any-where,
        will get hiosted to top with default value 'undefined'

    phase-2: execution
    
        instruction will get execute in sequence

    ------------------------------------------------------

    by default , js-runtime has one global-context and global-object

    global-obj
    -----------

     browser-envi ==> window
     node.js      ==> global


     impp-note : global-context always executed by global-obj



     // imp-note:

     every func invocation also creates new-context which child of context
     in which that func has declared.
    
*/





// var v = 12;
// console.log(v);


//-----------------------------


// var v = 12;
// function f1() {
//     console.log(v);
//     var v = 13;
// }
// f1(); // f1-context ==> global-context


//--------------------------------


// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     //f2(); // f2-context ==> f1-context
//     var v = 13;
//     return f2;
// }

// var f2Func=f1(); // f1-context ==> global-context

// f2Func();

//--------------------------------



// function func() {
//     v = 12;
// }

// func();

// console.log(v);


//--------------------------------


// function func() {
//     {
//         var v = 100;
//     }
//     console.log(v);
// }

// func();

//--------------------------------

// var v = 12;
// var v = 12;


//--------------------------------

// var nagTnr = {
//     name:'Nag'
// };

// nagTnr = {
//     name:'bla bla'
// };


//--------------------------------


// problems declaring variables with 'var' keyword

/*

    ==> always get hoisted
    ==> no block scope
    ==> can re-declare same variable within context
    ==> references are mutable

*/


// solns: use let & const keywords ( from ES6 )




// console.log(v);
// let v = 12;


// var v = 100;

// {
//     let v = 200;
// }

// console.log(v);


// let i = 1;
// // let i = 2;


//------------------------------------------


// const comp = {
//     prop1:'bla'
// }

// comp.prop1="bla bla"










