// TODO: Import the 'prompt-sync' module to enable user input from the console.
const prompt = require('prompt-sync')();

// TODO: Define a class named 'Book' with a constructor that initializes 'title', 'category', 'author', 'genre', and 'price'.
class Book {
    constructor(title, category, author, genre, price){
        this.title = title;
        this.category = category;
        this.author = author;
        this.genre = genre;
        this.price = price;
    }
}

// TODO: Initialize an empty array named 'books' to store book objects.
let books = [];

// TODO: Define a function 'addBook' that takes 'title', 'category', 'author', 'genre', and 'price' as parameters and adds a new book to the 'books' array.
function addBook(title, category, author, genre, price) {
    const newBook = new Book(title, category, author, genre, price);
    books.push(newBook);
    console.log("Book added successfully");
}

// TODO: Define a function 'searchBook' that takes 'title' as a parameter and searches for a book by its title in the 'books' array.
function searchBook(title) {
    const foundBook = books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if(foundBook){
        console.log("Book found! Judul :", foundBook.title,", category : ",foundBook.category,", author : ",foundBook.author,", genre : ",foundBook.genre,", price : ",foundBook.price);
    } else {
        console.log("Book not found");
    }
}

// TODO: Define a function 'deleteBook' that takes 'title' as a parameter and deletes a book by its title from the 'books' array.
function deleteBook(title) {
    const titleLength = books.length;
    books = books.filter(book => book.title.toLowerCase() !== title.toLowerCase());
    if(books.length < titleLength){
        console.log("Book deleted successfully");
    } else {
        console.log("Book not found");
    }
}

// TODO: Define a function 'showBooks' that logs all books in the 'books' array to the console.
function showBooks() {
    if(books.length > 0){
        console.log("List of all books : ");
        books.forEach(book => console.log(book))
    } else {
        console.log("No books available")
    }
}

// TODO: Define a function 'searchBookByPrice' that takes 'price' as a parameter and searches for a book by its price in the 'books' array.
function searchBookByPrice(price) {
    const foundBooks = books.filter(books => books.price === price);
    if(foundBooks.length > 0){
        console.log("Books found at price : ", price);
        foundBooks.forEach(book => console.log(book));
    } else {
        console.log("No books found at the specified price");
    }
}

// TODO: Define a function 'displayMenu' that displays a menu of options and handles user input to perform different actions.
function displayMenu(){
    while(true) {
        console.log('1. Add book');
        console.log('2. Search book');
        console.log('3. Delete book');
        console.log('4. Show all books');
        console.log('5. Search book by price');
        console.log('6. Exit');
        // TODO: Prompt the user to enter a choice and perform the corresponding action, save the input in a variable 'choice'.
        let choice = prompt("Enter your choice : ")

        switch(choice) {
            case '1':
                // TODO: Prompt the user to enter book details and call 'addBook' with the provided details.
                let title = prompt ("Enter the title of the book : ");
                let category = prompt("Enter the category of the book : ");
                let author = prompt("Enter the author of the book : ");
                let genre = prompt("Enter the genre of the book : ");
                let price = Int(prompt("Enter the price of the book : "));
                addBook(title, category, author, genre, price);
                break;
            case '2':
                // TODO: Prompt the user to enter the title of the book to search and call 'searchBook' with the provided title.
                let searchTitle = prompt("Enter the title of the book you want to search : ");
                searchBook(searchTitle);
                break;
            case '3':
                // TODO: Prompt the user to enter the title of the book to delete and call 'deleteBook' with the provided title.
                let deleteTitle = prompt("Enter the title of the book you want to delete : ");
                deleteBook(deleteTitle);
                break;
            case '4':
                // TODO: Call 'showBooks' to display all books.
                showBooks();
                break;
            case '5':
                // TODO: Prompt the user to enter the price of the book to search and call 'searchBookByPrice' with the provided price.
                let searchPrice = Int(prompt("Enter the price of the book you want to search : "));
                searchBookByPrice(searchPrice);
                break;
            case '6':
                // TODO: Exit the menu loop.
                console.log("Exit. Thank you and goodbye!");
                return;
            default:
                // TODO: Log an error message for an invalid choice.
                console.error("Invalid choice. Please enter a number between 1 and 6")
        }
    }
}

// TODO: Call 'displayMenu' to start the application.
displayMenu();