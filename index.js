/* eslint-disable  no-restricted-globals */
/* eslint-disable  no-unused-vars */
// Create Dom element
import { DateTime } from './modules/luxon';
import { switchMode } from './modules/localstorage';

const AddBook = document.querySelector('#displaybook');
const addBooks = localStorage.getItem('adbooks');
let books = [];

if (addBooks) {
  books = JSON.parse(addBooks);
}
// Display book information

books.forEach((book) => {
  const newBook = `
  <p>${book.name}</p>
  <p>${book.author}</p>
  <button onclick=deleteBook(${book.id}) class="removebtn"> Remove</button>
  `;

  const bookDiv = document.createElement('div');
  bookDiv.classList.add('test');
  bookDiv.innerHTML = newBook;
  AddBook.appendChild(bookDiv);
});
// Remove button function
function deleteBook(id) {
  books = books.filter((book) => {
    if (id === book.id) {
      return false;
    }
    return true;
  });
  localStorage.setItem('adbooks', JSON.stringify(books));
  window.location.reload();
}
// Add book information
const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
  const name = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  let id = 0;
  if (books.length > 0) {
    id = books[books.length - 1].id + 1;
  }
  books.push({
    id,
    name,
    author,
  });
  localStorage.setItem('adbooks', JSON.stringify(books));
  window.location.reload();
});

// Display Sections Dynamically
const awesomeBooksSection = document.getElementById('listbooksec');
const inputFormSection = document.getElementById('newbooksec');
const showListButton = document.getElementById('show-list-button');
const addNewButton = document.getElementById('addnewlink');
const contactInfoSection = document.getElementById('contact-info');
const contactInfoButton = document.getElementById('contact-info-button');

// const switchMode = (node) => {
//     if (showListButton !== node && showListButton.classList.contains('active')) {
//       showListButton.classList.remove('active');
//     } else if (addNewButton !== node && addNewButton.classList.contains('active')) {
//       addNewButton.classList.remove('active');
//     } else if (contactInfoButton !== node && contactInfoButton.classList.contains('active')) {
//       contactInfoButton.classList.remove('active');
//     }
//     node.classList.add('active');
//   };
  
  const showBooksList = () => {
    switchMode(showListButton);
    awesomeBooksSection.style.display = 'block';
  
    contactInfoSection.style.display = 'none';
    inputFormSection.style.display = 'none';
  };
  
  showListButton.addEventListener('click', (event) => {
    event.preventDefault();
    showBooksList();
  });
  
  addNewButton.addEventListener('click', (event) => {
    event.preventDefault();
    switchMode(addNewButton);
    inputFormSection.style.display = 'flex';
    awesomeBooksSection.style.display = 'none';
    contactInfoSection.style.display = 'none';
  });
  
  contactInfoButton.addEventListener('click', (event) => {
    event.preventDefault();
    switchMode(contactInfoButton);
    contactInfoSection.style.display = 'block';
    awesomeBooksSection.style.display = 'none';
    inputFormSection.style.display = 'none';
  });

// Displaying current date and Time using Luxon
const dateTime = document.querySelector('#current-date');
const currentTime = () => {
  const currentDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  dateTime.innerHTML = currentDateTime;
};
setInterval(currentTime, 500);