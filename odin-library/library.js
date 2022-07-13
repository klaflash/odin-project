let myLibrary = [];

function Book(title, author, pages, read, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;
}

const meditations = new Book('Mediations', 'M.A.', 350, true, 4);
myLibrary.push(meditations);

Book.prototype.info = function() {

    if (this.read == true) {
        return `${this.title} by ${this.author}, ${this.pages} pages, already read, ${this.rating} stars`;
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }

}

let book_title = window.prompt("Title: ");
let book_author = window.prompt("Author: ");
let book_pages = window.prompt("Pages: ");
let book_read = window.prompt("Read? ");
let book_rating = window.prompt("Rating: ");

function addBookToLibrary() {

    const temp = new Book(book_title, book_author, book_pages, book_read, book_rating);
    myLibrary.push(temp);

}

addBookToLibrary();

function display() {

    for (const book of myLibrary) {
        const tag = document.createElement('div');
        const text = document.createTextNode(book.info());
        tag.appendChild(text);

        tag.style.cssText = "display:flex;justify-content:center;align-items:center;background-color:grey;width:20vw;height:25vw;margin:10px;"

        var element = document.querySelector('.container');
        element.appendChild(tag);
    }
}

display();