// * ====== GLOBAL VARIABLES ======= *
const button = document.querySelector('button');
const addBookForm = document.querySelector('.form-control');
const searchForm = document.querySelector('.search-form');
const searchInput = document.getElementById('search-book');
const uncompletedBooksContainer = document.querySelector(
  '.uncompleted-books-list'
);
const completedBooksContainer = document.querySelector('.completed-books-list');

const bookArray = [];

// * ======== EVENT LISTENERS ======== *
document.addEventListener('DOMContentLoaded', () => {
  if (isStorageExists()) {
    loadDataFromStorage();
  }
});

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookId = +new Date();
  const titleValue = document.getElementById('title').value;
  const authorValue = document.getElementById('author').value;
  const yearValue = document.getElementById('year').value;
  const isChecked = document.getElementById('is-complete').checked;

  const newBook = {
    id: bookId,
    title: titleValue,
    author: authorValue,
    year: parseInt(yearValue),
    isComplete: isChecked,
  };

  bookArray.push(newBook);
  renderBook(bookArray, false);
  saveBook();

  addBookForm.reset();
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookToSearch = document.getElementById('search-book').value;

  const searchResult = bookArray.filter((book) => {
    return book.title.toUpperCase().includes(bookToSearch.toUpperCase());
  });

  renderBook(searchResult, true);
});

searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    renderBook(bookArray, false);
  }
});

// * ======== FUNCTIONS ======== *
function isStorageExists() {
  if (typeof Storage === undefined) {
    alert("Your browser don't support local storage");
    return false;
  }

  return true;
}

function loadDataFromStorage() {
  const storageData = localStorage.getItem('Book-Data');
  const bookData = JSON.parse(storageData);

  if (bookData !== null) {
    for (const book of bookData) {
      bookArray.push(book);
    }
    renderBook(bookArray, false);
  }
}

function createBookElement({ id, title, author, year, isComplete }) {
  const bookContainer = document.createElement('div');
  bookContainer.setAttribute('id', id);
  bookContainer.classList.add('book-container');

  const bookTitle = document.createElement('h3');
  bookTitle.innerText = title;

  const bookAuthor = document.createElement('p');
  bookAuthor.innerText = author;

  const bookYear = document.createElement('p');
  bookYear.innerText = year;

  bookContainer.append(bookTitle, bookAuthor, bookYear);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('action-button');

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete book';
  deleteButton.classList.add('delete-btn');

  const dialogBoxContainer = document.createElement('div');
  dialogBoxContainer.classList.add('dialog-box', 'custom-box');
  dialogBoxContainer.setAttribute('hidden', 'true');

  const confirmText = document.createElement('p');
  confirmText.innerText = 'Are you sure want to delete this book?';

  const confirmButton = document.createElement('button');
  confirmButton.classList.add('completed-btn', 'dialog-button');
  confirmButton.setAttribute('id', 'confirm-delete');
  confirmButton.innerText = 'YES';

  confirmButton.addEventListener('click', () => {
    deleteBook(id);
  });

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('delete-btn', 'dialog-button');
  cancelButton.setAttribute('id', 'cancel-delete');
  cancelButton.innerText = 'NO';

  cancelButton.addEventListener('click', () => {
    dialogBoxContainer.setAttribute('hidden', 'true');
  });

  dialogBoxContainer.append(confirmText, confirmButton, cancelButton);

  deleteButton.addEventListener('click', (e) => {
    dialogBoxContainer.toggleAttribute('hidden');
  });

  buttonContainer.append(deleteButton, dialogBoxContainer);

  if (isComplete) {
    const undoButton = document.createElement('button');
    undoButton.innerText = 'Undo finished';
    undoButton.classList.add('uncomplete-btn');

    undoButton.addEventListener('click', () => {
      undoBookFromFinish(id);
    });

    buttonContainer.prepend(undoButton);
    bookContainer.append(buttonContainer);
  } else {
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Finish reading';
    completeButton.classList.add('completed-btn');

    completeButton.addEventListener('click', () => {
      addBookToFinish(id);
    });

    buttonContainer.prepend(completeButton);
    bookContainer.append(buttonContainer);
  }

  return bookContainer;
}

function renderBook(bookArray, isFromSearch) {
  completedBooksContainer.innerHTML = '';
  uncompletedBooksContainer.innerHTML = '';

  bookArray.forEach((item) => {
    const bookElement = createBookElement(item);

    if (item.isComplete) {
      completedBooksContainer.appendChild(bookElement);
    } else {
      uncompletedBooksContainer.appendChild(bookElement);
    }
  });

  if (uncompletedBooksContainer.innerHTML == '') {
    const emptyBook = document.createElement('p');
    if (isFromSearch === false) {
      emptyBook.innerText = 'No books added.';
    } else {
      emptyBook.innerText = 'No books found in this shelf.';
    }
    uncompletedBooksContainer.append(emptyBook);
  }

  if (completedBooksContainer.innerHTML == '') {
    const emptyBook = document.createElement('p');
    if (isFromSearch === false) {
      emptyBook.innerText = 'No books added.';
    } else {
      emptyBook.innerText = 'No books found in this shelf.';
    }
    completedBooksContainer.append(emptyBook);
  }
}

function saveBook() {
  if (isStorageExists()) {
    const parsedData = JSON.stringify(bookArray);
    localStorage.setItem('Book-Data', parsedData);
  }
}

function deleteBook(id) {
  let bookTarget;

  for (index in bookArray) {
    if (bookArray[index].id === id) {
      bookTarget = index;
    }
  }

  if (bookTarget === -1) return;

  bookArray.splice(bookTarget, 1);
  renderBook(bookArray, false);
  saveBook();
}

function undoBookFromFinish(id) {
  const bookTarget = findBookId(id);

  if (bookTarget == null) return;

  bookTarget.isComplete = false;

  renderBook(bookArray, false);
  saveBook();
}

function addBookToFinish(id) {
  const bookTarget = findBookId(id);

  if (bookTarget == null) return;

  bookTarget.isComplete = true;

  renderBook(bookArray, false);
  saveBook();
}

function findBookId(id) {
  for (book of bookArray) {
    if (book.id == id) {
      return book;
    }
  }

  return null;
}
