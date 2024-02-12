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

// *************** FIND BY TITLE ***************

const findBook = async (request, response) => {
  try {
    const newBook = await Book.find({ title: request.params.book });
    console.log(request.params);
    response.send({ message: "Success", params: newBook });
  } catch (error) {
    response.send({ message: error.message, error: error });
  }
};

// *************** FIND AND UPDATE ***************
const findAndUpdate = async (request, response) => {
  try {
    if (request.params.toUpdate === "title") {
      const book = await Book.findOneAndUpdate(
        { title: request.params.book },
        { title: request.params.updated },
        { new: true }
      );
      response.send({ message: "Title updated", book: book });
      //
    } else if (request.params.toUpdate === "author") {
      const book = await Book.findOneAndUpdate(
        { title: request.params.book },
        { author: request.params.updated },
        { new: true }
      );
      response.send({ message: "Author updated", book: book });
      //
    } else if (request.params.toUpdate === "genre") {
      const book = await Book.findOneAndUpdate(
        { title: request.params.book },
        { genre: request.params.updated },
        { new: true }
      );
      response.send({ message: "Genre updated", book: book });
    }
    //
  } catch (error) {
    response.send({ message: error.message, error: error });
  }
};
//

// *************** DELETE SINGLE OR ALL ***************
const deleteBy = async (request, response) => {
  try {
    if (request.params.choice === "All" && request.params.byWhat === "All") {
      const books = await Book.deleteMany({});
      console.log(books);
      response.send({ message: "deleted", books: books });
      //
    } else if ((request.params.choice = "author")) {
      await Book.deleteMany({ author: request.params.author });
      const books = await Book.find({});
      response.send({ message: "Book deleted", books: books });

      //
    }
  } catch (error) {
    response.send({ message: error.message, error: error });
  }
};

// *******************************************
module.exports = {
  addBook: addBook,
  getBooks: getBooks,
  updateBook: updateBook,
  deleteBook: deleteBook,
  findBook: findBook,
  findAndUpdate: findAndUpdate,
  deleteBy: deleteBy,
};
