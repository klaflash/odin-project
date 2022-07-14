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

function addBookToLibrary(book_title, book_author, book_pages, book_read, book_rating) {

    const temp = new Book(book_title, book_author, book_pages, book_read, book_rating);
    myLibrary.push(temp);
    display();
}


function display() {

    const container = document.querySelector('.container');
    container.replaceChildren();

    myLibrary.map((book, index) => {
        createBook(book,index)
    });    
}

display();

function createBook(book, index) {

    const tag = document.createElement('div');
    const text = document.createTextNode(book.info());
    const remove = document.createElement('button');
    remove.textContent = 'X';
    remove.setAttribute('id', 'delete');

    tag.appendChild(text);
    tag.appendChild(remove);

    tag.style.cssText = "display:flex;justify-content:center;align-items:center;background-color:grey;width:15vw;height:20vw;margin:10px;"

    remove.addEventListener('click', function() {
        removeBook(index);
    });



    const element = document.querySelector('.container');
    element.appendChild(tag);

}

function removeBook(index) {
    myLibrary.splice(index, 1);
    display();
}

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
    let read = document.querySelector('input[name="read"]:checked').value;
    const rating = document.getElementById('rating').value;

    if (read === 'true') {
        read = true;
    } else if (read === 'false') {
        read = false;
    }

    addBookToLibrary(title, author, pages, read, rating);

    document.querySelector('.popup').style.display = 'none';
});





