const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
  findBook,
  findAndUpdate,
  deleteBy,
} = require("./controlers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getBooks", getBooks);
bookRouter.put("/books/update", updateBook);
bookRouter.delete("/books/delete", deleteBook);
// ***************************

// ------  FIND BY TITLE ------
// Search book by title
// /books/findOne/<book title>

bookRouter.get(`/books/findOne/:book`, findBook);

// ------  FIND AND UPDATE ------
// Find book by title and update chosen item. Artist, title or genre
// :book - book title. :toUpdate(title, author or genre). :updated = type update
// /books/findBy/<book title>/<What to update: title || author || genre>/<update>

bookRouter.put(`/books/findBy/:book/:toUpdate/:updated`, findAndUpdate);

// ------  DELETE SINGLE OR ALL ------

// /books/deleteBy/All/All - delete all items
// /books/deleteBy/<author>/<author name>

bookRouter.delete(`/books/deleteBy/:choice/:byWhat`, deleteBy);

module.exports = bookRouter;
