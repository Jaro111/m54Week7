const express = require("express");
const app = express();

// app -object
// use - method
// "example" - folder
// app.use("/example", express.static("example"));

// app.use("/myWebsite", express.static("website"));

// app.get("/health", (req, res) => {
//   res.send("healthy");
// });

// http verbs - get, post, put, delete
// http verb get

const fakeArray = [];

const userArray = {
  username: "admin",
  password: "12345",
};

app.use(express.json());

// ******************************************************************************

// ******************************************************************************

app.get("/getAllBooks", (request, response) => {
  if (userArray.username === "admin" && userArray.password === "12345") {
    response.send({
      message: "success",
      fakeArr: fakeArray,
    });
  } else {
    response.send({
      message: "access denied",
    });
  }
});
// ******************************************************************************

// ******************************************************************************
app.post("/addBook", (request, response) => {
  if (
    request.body.useDetails.username === "admin" &&
    request.body.useDetails.password === "12345"
  ) {
    fakeArray.push(request.body.book);
    response.send({
      message: "success",
      newBook: fakeArray[fakeArray.length - 1],
    });
  } else {
    response.send({
      message: "acces denied",
    });
  }
});
// ********************************************************************************

// ******************************************************************************
app.put("/books", (request, response) => {
  for (let i = 0; i < fakeArray.length; i++) {
    if (fakeArray[i].title === request.body.title) {
      fakeArray[i] = request.body.item;
    }
  }
  response.send({
    message: "success",
    newBook: fakeArray,
  });
});
// *********************************************************************************

// ******************************************************************************
app.delete("/books", (request, response) => {
  for (let i = 0; i < fakeArray.length; i++) {
    if (fakeArray[i].title === request.body.title) {
      fakeArray.splice(i, 1);
    }
  }
  response.send({
    message: "deleted",
    newBook: fakeArray,
  });
});

// ******************************************************************************

// ******************************************************************************

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
