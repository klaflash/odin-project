let myLibrary = [];

function Book(title, author, pages, read, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;
}

Book.prototype.info = function() {

    if (this.read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, already read, ${this.rating} stars`;
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }

}

function addBookToLibrary() {

}