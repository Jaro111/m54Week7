const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
  //   findBook,
} = require("./controlers");

bookRouter.post("/book/addBook", addBook);
bookRouter.get("/books/getBooks", getBooks);
bookRouter.put("/books/update", updateBook);
bookRouter.delete("/books/delete", deleteBook);
// ***************************
// bookRouter.get("books/getBook", findBook);
// anatomy of a route
// bookRiouter.httpMethod(route, function)

module.exports = bookRouter;
