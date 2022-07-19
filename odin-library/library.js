let myLibrary = [];

class Book {

    constructor(title, author, pages, read, rating) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.rating = rating; 
    }

    info() {

        if (this.read == true) {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.rating} stars`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages`;
        }
    }

    static addBookToLibrary(book_title, book_author, book_pages, book_read, book_rating) {

        const temp = new Book(book_title, book_author, book_pages, book_read, book_rating);
        myLibrary.push(temp);
        Book.display();
    }

    static display() {

        const container = document.querySelector('.container');
        container.replaceChildren();
    
        myLibrary.map((book, index) => {
            Book.createBook(book,index)
        });    
    }

    static createBook(book, index) {

        const tag = document.createElement('div');
    
        const title_div = document.createElement('div');
        const author_div = document.createElement('div');
    
        const title = document.createTextNode(book.title);
        const author = document.createTextNode(book.author);
    
        title_div.appendChild(title);
        author_div.appendChild(author);
    
        const footer = document.createTextNode(book.pages + ' pages');
        const footer_div = document.createElement('div');
    
        const remove = document.createElement('button');
        remove.textContent = 'X';
        remove.setAttribute('id', 'delete');
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'read-status';
        checkbox.value = 'on';
        checkbox.id = 'read-id';
    
        const label = document.createElement('label');
        label.htmlFor = 'read-id';
        label.appendChild(document.createTextNode('Read?'));
    
        const group = document.createElement('div');
        group.appendChild(label);
        group.appendChild(checkbox);
    
        footer_div.appendChild(group);
        footer_div.appendChild(footer);
    
    
        tag.appendChild(remove);
        tag.appendChild(title_div);
        tag.appendChild(author_div);
        tag.appendChild(footer_div);
    
        const outside_div = document.createElement('div');
        const outside = document.createTextNode(book.rating + '/5 Stars');
        outside_div.appendChild(outside);
    
        const blank_div = document.createElement('div');
    
        if (book.read === true) {
            checkbox.checked = 'true';
            tag.appendChild(outside_div);
        } else {
            tag.appendChild(blank_div);
        }
    
        tag.style.cssText = "display:grid;grid-template-columns:1fr;grid-template-rows:1fr 2fr 4fr 1fr 1fr;background-color:lightgrey;width:15vw;height:23vw;margin:10px;"
    
        remove.style.cssText = "grid-row: span 1;margin:5px;margin-left:85%;border:none;cursor:pointer;background:none;font-weight:bold";
    
        title_div.style.cssText = 'display:flex;align-items:end;justify-content:center;padding-bottom:5px;font-size:20px;margin-left:5px;';
        author_div.style.cssText = 'display:flex;justify-content:center;';
    
        group.style.cssText = 'display:flex;gap:5px;align-items:center;'
    
        footer_div.style.cssText = 'display:flex;justify-content:space-between;align-items:end;padding:8px;';
    
        outside_div.style.cssText = "display:flex;justify-content:center;align-items:end;background-color:white";
        blank_div.style.cssText = 'background-color:white;'
    
        remove.addEventListener('click', function() {
            Book.removeBook(index);
        });
    
        const element = document.querySelector('.container');
        element.appendChild(tag);
    
    }

    static removeBook(index) {
        myLibrary.splice(index, 1);
        Book.display();
    }


}


const meditations = new Book('Mediations', 'Marcus Aurelius', 191, true, 4);
const super_ai = new Book('Superintelligence', 'Nick Bostrom', 353,false,5);
const restaurant = new Book('The Restaurant at the End of the Universe', 'Douglas Adams', 255, true, 5);
myLibrary.push(meditations);
myLibrary.push(super_ai);
myLibrary.push(restaurant);

Book.display();



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

    Book.addBookToLibrary(title, author, pages, read, rating);

    document.querySelector('.popup').style.display = 'none';
});




