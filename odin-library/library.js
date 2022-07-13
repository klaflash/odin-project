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

//let book_title = window.prompt("Title: ");
//let book_author = window.prompt("Author: ");
//let book_pages = window.prompt("Pages: ");
//let book_read = window.prompt("Read? ");
//let book_rating = window.prompt("Rating: ");

function addBookToLibrary(book_title, book_author, book_pages, book_read, book_rating) {

    const temp = new Book(book_title, book_author, book_pages, book_read, book_rating);
    myLibrary.push(temp);
    display();
}

//addBookToLibrary();

function display() {

    const book = myLibrary[myLibrary.length - 1];

        const tag = document.createElement('div');
        const text = document.createTextNode(book.info());
        tag.appendChild(text);

        tag.style.cssText = "display:flex;justify-content:center;align-items:center;background-color:grey;width:20vw;height:25vw;margin:10px;"

        var element = document.querySelector('.container');
        element.appendChild(tag);
}

display();

document.getElementById('new-book').addEventListener('click', function() {

    document.querySelector('.popup').style.display = 'flex';

});

document.getElementById('close-popup').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
});

document.getElementById('submit-button').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementsByName('read').value;
    const rating = document.getElementById('rating').value;

    addBookToLibrary(title, author, pages, read, rating);

    document.querySelector('.popup').style.display = 'none';
});