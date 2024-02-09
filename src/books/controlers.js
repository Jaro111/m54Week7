const Book = require("./model");

// *************** ADD BOOK ***************

const addBook = async (request, response) => {
  try {
    console.log("request.body: ", request.body);
    const book = await Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });
    console.log("book: ", book);
    response.send({ message: "success book created", book: book });
  } catch (error) {
    response.send({ message: error.message, error: error });
  }
};

// *************** GET BOOK ***************

const getBooks = async (request, response) => {
  try {
    const books = await Book.find({});
    response.send({ books: books });
  } catch (error) {
    response.send({ message: error.message, error: error });
  }
};

// *************** UPDATE BOOK ***************

const updateBook = async (request, response) => {
  try {
    const book = await Book.findOneAndUpdate(
      { author: request.body.author },
      { author: request.body.updateAuthor.author },
      { new: true }
    );
    response.send({ message: "Success: Author updated", book: book });
  } catch (error) {
    response.send({ message: error.message, error: error });
  }
};

// *************** DELETE BOOK ***************

const deleteBook = async (request, response) => {
  try {
    await Book.deleteOne({ title: request.body.title });
    const books = await Book.find({});
    response.send({ message: "Book deleted", books: books });
  } catch (error) {
    response.send({ message: error.message, error: error });
  }
};

// *************** FIND ***************

// const findBook = async (request, response) => {
//   await Book.findOne();
//   console.log("title: ", request.query.books);
// };

// *******************************************

// *******************************************
module.exports = {
  addBook: addBook,
  getBooks: getBooks,
  updateBook: updateBook,
  deleteBook: deleteBook,
  // findBook: findBook,
};
