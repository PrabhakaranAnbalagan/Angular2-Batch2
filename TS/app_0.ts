

enum Category { "LANGUAGE", "FRAMEWORK", "OTHER" };
 

function getAllBooks() {
    let books = [
        { title: 'javascript', author: 'Nag', avaliable: true,category:Category.LANGUAGE },
        { title: 'typescript', author: 'Ria', avaliable: false ,category:Category.LANGUAGE},
        { title: 'angular', author: 'Nag', avaliable: true,category:Category.FRAMEWORK }
    ]
    return books;
}

//--------------------------------------------------------------------

// function logFirstAvailableBook(books: Array<any>): void {
//     let numberOfBooks: number = books.length;
//     let firstAvailable: string = '';

//     for (let currentBook of books) {
//         if (currentBook.avaliable) {
//             firstAvailable = currentBook.title;
//             break;
//         }
//     }
//     console.log(`Total books : ${numberOfBooks}`);
//     console.log(`First Available : ${firstAvailable}`);
// }

// const allBooks = getAllBooks();
// // allBooks.push({ title: 'New Book' ,author:'Anony',avaliable:true});
// logFirstAvailableBook(allBooks);


//--------------------------------------------------------------------

function getTitlesByCategory(categoryFilter:Category):Array<string> {
    
    const allBooks = getAllBooks();

    console.log(`getting books in category : ${Category[categoryFilter]}`);
    let filteredTitles: string[] = [];
    for (let book of allBooks) {
        if (book.category === categoryFilter) {
            filteredTitles.push(book.title);
        }
    }

    return filteredTitles;

}

function logBookTitles(titles: string[]) :void{
    for (let title of titles) {
        console.log(title);
    }
}

const langBooks = getTitlesByCategory(Category.LANGUAGE);
logBookTitles(langBooks);