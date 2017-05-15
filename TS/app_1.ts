


// enum Category { "LANGUAGE", "FRAMEWORK", "OTHER" };

// function getAllBooks() {
//     let books = [
//         { title: 'javascript', author: 'Nag', avaliable: true, category: Category.LANGUAGE },
//         { title: 'typescript', author: 'Ria', avaliable: false, category: Category.LANGUAGE },
//         { title: 'angular', author: 'Nag', avaliable: true, category: Category.FRAMEWORK }
//     ]
//     return books;
// }

//----------------------------------------------------------
// let nagBooks=getAllBooks().filter(function (book) { 
//     return book.author === "Nag";
// });

// nagBooks.forEach(function (book) { 
//     console.log(book.title);
// });

//----------------------------------------------------------

// let nagBooks = getAllBooks().filter((book) => book.author === "Nag");
// nagBooks.forEach((book) => { console.log(book.title); });


//----------------------------------------------------------


// // TS -> function types

// let greet: (string) => string;

// greet = function (name:string) {
//     return "Hello " + name;
// }

//----------------------------------------------------------


// TS ==> interfaces

// interface Wheel{
//     rotate: () => void; // function type
// }


// class MRFWheel  implements Wheel{
//     rotate() {
//         console.log("MRF Wheel rotating....");
//     }
// }

// class CEATWheel implements Wheel{ 
//     rotate() {
//         console.log("CEAT Wheel rotating....");
//     }
// }


// class Car {

//     wheel: Wheel;
//     constructor(wheel: Wheel) {
//         this.wheel = wheel;
//     }

//     move() {
//         this.wheel.rotate();
//         console.log("car moving....");
//     }
// }

// let mrfWheel = new MRFWheel();
// let ceatWheel = new CEATWheel();

// let car = new Car(ceatWheel);

// car.move();



//-----------------------------------------------


// interface Product{
//     id: number;
//     title: string;
//     price: number;
//     description?: string,
//     buy: (qty: number)=>void;
// }


// let product: Product = { id: 123123, title: 'Laptop', price: 100.00, buy:() => { }};



//-----------------------------------------------


// classes


// class Book {
//     title: string;
//     _author: string;  // _  ==> indication to others to consider as internal property 
//     constructor(title: string, author?: string) {
//         //
//     }
//     set author(author: string) {
//         if (author) {
//             this._author = author;
//         }
//     }

//     get author() {
//         return this._author;
//     }
// }

// let book = new Book("JS");
// book.title = "TS";
// book.author = "Nag";  // set

// console.log(book.author); // get


// book.author = "";

// console.log(book.author);


//-----------------------------------------------


// Abstract Class

// abstract class LivingThing{
//     eat() { }
//     sleep() { }
//     abstract work(): void;
// }

// class Human extends LivingThing{
//     work() { }
// }

// class Animal extends LivingThing{
//     work() { }
// }

// // let lt = new LivingThing();





