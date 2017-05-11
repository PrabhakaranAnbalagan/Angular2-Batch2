var Category;
(function (Category) {
    Category[Category["LANGUAGE"] = 0] = "LANGUAGE";
    Category[Category["FRAMEWORK"] = 1] = "FRAMEWORK";
    Category[Category["OTHER"] = 2] = "OTHER";
})(Category || (Category = {}));
;
function getAllBooks() {
    var books = [
        { title: 'javascript', author: 'Nag', avaliable: true, category: Category.LANGUAGE },
        { title: 'typescript', author: 'Ria', avaliable: false, category: Category.LANGUAGE },
        { title: 'angular', author: 'Nag', avaliable: true, category: Category.FRAMEWORK }
    ];
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
var greetFunc; // func type
function sayHello(name) {
    return "hello " + name;
}
function sayHi(name) {
    return "hi " + name;
}
function greet(name) {
    return "hi " + name;
}
function func() { }
greetFunc = sayHello;
greetFunc = sayHi;
greetFunc = greet;
// greetFunc = func;
//# sourceMappingURL=app.js.map