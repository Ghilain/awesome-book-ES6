/* eslint-disable  no-restricted-globals */
/* eslint-disable  no-unused-vars */
// Create Dom element
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