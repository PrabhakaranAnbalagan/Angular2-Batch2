


/*

    this ==> owner of execution-context

*/


// why we need 'this' keyword ?

// let pName = "Global";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         //let pName = "Local";
//         //console.log('im '+pName);  // reads context's data
//         //console.log('im '+person.pName); // reads obj's data
//         console.log('im '+this.pName); // // reads context's data
//     }
// }

// let p = person;
// person = {pName:'Ria'};

// p.sayName();



//------------------------------------------------




// let p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// let p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name); } };


// or


// function sayNameForAll() {
//     console.dir(this);
//     console.log('im '+this.name);
// }

// let p1 = { name: 'Nag', sayName: sayNameForAll };
// let p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ??  // function invocation  ( this ==> global-obj )
// p1.sayName(); // im Nag    // method invocation    ( this ==> invker-obj)
// p2.sayName(); // im Ria


//----------------------------------------------------------------

// let menu = {
    
// // }

// // console.log(menu.spl);


// function getMenu() {
//     console.log(this.spl);
// }



// getMenu();

//----------------------------------------------------------------



let menu = "biryani";

function displayMenu() {
    console.log(menu);
    console.log(this.menu);
}

displayMenu();