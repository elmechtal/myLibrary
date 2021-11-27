let myLibrary = [];
const booksDiv = document.querySelector('.books');
const addBtn = document.querySelector('.add');


window.addEventListener('click', function(e) {
    if (e.target.className === 'remove') {
        let index = e.target.id;
        myLibrary.splice(index, 1);
        showLibrary();
        }
});


addBtn.addEventListener('click', function() {
    let title = prompt('Enter the title of the book: ');
    let author = prompt('Enter the author of the book: ');
    let pages = prompt('Enter the number of pages of the book: ');
    let book = new Book(title, author, pages);
    myLibrary.push(book);
    showLibrary();
});


function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}



function showLibrary() {
    booksDiv.innerHTML = '';
    if (myLibrary.length === 0) booksDiv.innerHTML = 'No books to show';
    renderBooks();
}


function renderTitle(t) {
    let title = document.createElement('h2');
    title.classList = 'title';
    title.innerText = t;
    return title;
}

function renderAuthor(a) {
    let author = document.createElement('p');
    author.classList = 'author';
    author.innerText = 'By: ' + a;
    return author;
}

function renderPages(p) {
    let pages = document.createElement('p');
        pages.innerText = 'Pages: '+ p;
        return pages;
}

function renderRemoveBtn(b) {
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.id = myLibrary.indexOf(b);
    remove.innerText = 'Remove';
    return remove;
}
 
function renderBook() {
    let bookDiv = document.createElement('div');
        bookDiv.classList = 'book';
        return bookDiv;
}

function renderBooks() {
    myLibrary.forEach(function(book) {
        let b = renderBook();
        b.appendChild(renderTitle(book.title));
        b.appendChild(renderAuthor(book.author));
        b.appendChild(renderPages(book.pages));
        b.appendChild(renderRemoveBtn(book));
        booksDiv.appendChild(b);
    });
}

Book.prototype = Object.create({info: function() {
    return `${this.title} was wrriten by ${this.author}, it has ${this.pages} pages and is ${this.isRead? 'already' : 'not yet'} read.`;
}} ,{});

function addBookToLibrary(book) {
    myLibrary.push(book);
}

showLibrary();
