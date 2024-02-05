const express = require("express");

const app = express();

// app -object
// use - method
// "example" - folder
// app.use("/example", express.static("example"));

app.use("/myWebsite", express.static("website"));


app.get ("/health", (req, res) => {
    res.send("healthy");
})

app.listen(5001, () => {
    console.log("Server is listening on port 5001")
});



