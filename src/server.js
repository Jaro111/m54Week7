require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./bd/connection");

const bookRouter = require("./books/routes");

const app = express();
app.use(express.json());

connection();

app.use(bookRouter);

// ******************************************************************************

// ************************************************** GET **************************************************

// ******************************************************************************

// // ************************************************** ADD **************************************************

// ********************************************************************************

// // ************************************************** EDIT **************************************************
// app.put("/books/update", async (request, response) => {
//   try {
//     const book = await Book.findOneAndUpdate(
//       { author: request.body.author },
//       { author: request.body.updateAuthor.author },
//       { new: true }
//     );
//     // response.send({ message: "Book updated", book: book });
//     if (!book) {
//       return response.status(404).send({ message: "Error: Book not found" });
//     }
//     response.send({ message: "Success: Author updated", book: book });
//   } catch (error) {
//     response.status(500).send({ message: "Error: Unable to update author" });
//   }
// });

// *********************************************************************************

// // ******************************************************************************
// app.delete("/books/delete", async (request, response) => {
//   const book = await Book.deleteOne({ title: request.body.title });
//   const books = await Book.find({});
//   response.send({ message: "Book deleted", books: books });
// });

// ******************************************************************************

// ******************************************************************************

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
