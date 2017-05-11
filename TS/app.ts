


enum Category { "LANGUAGE", "FRAMEWORK", "OTHER" };
 
function getAllBooks() {
    let books = [
        { title: 'javascript', author: 'Nag', avaliable: true,category:Category.LANGUAGE },
        { title: 'typescript', author: 'Ria', avaliable: false ,category:Category.LANGUAGE},
        { title: 'angular', author: 'Nag', avaliable: true,category:Category.FRAMEWORK }
    ]
    return books;
}

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


// Function Types  in ts


let greetFunc : (string) => string;  // func type


function sayHello(name) {
    return "hello "+name
}

function sayHi(name) {
    return "hi "+name
}

function greet(name) {
    return "hi "+name
}

function func() { }


greetFunc= sayHello;
greetFunc = sayHi
greetFunc= greet;

// greetFunc = func;
