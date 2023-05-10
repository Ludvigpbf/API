// Require express
const express = require("express");
const cors = require("cors");
const app = express();
const { create, readALL, read, update, deleteOne } = require("./bookCRUD");

const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017/bookID";

// connect to database
mongoose.connect(dbURI, { useNewUrlParser: true });
const db = mongoose.connection;

// if error
db.on("error", (err) => {
  console.error(`err: ${err}`);
}); // if connectedd
db.on("connected", (err, res) => {
  console.log("Connected to database");
});

// create a server-PORT
const PORT = process.env.PORT || 4000;

// parse json objects
app.use(express.json());
// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true }));
// cors är bra så att vi kan ha server och client isär
app.use(cors());

// get all books
app.get("/books", async (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

// get one book
app.get("/books/:bookID", async (req, res) => {
  res.status(200).json({
    message: "success",
    books: req.params.bookID,
  });
});

// post one book
app.post("/books", async (req, res) => {
  res.status(201).json({
    message: "success",
  });
});

// update one book
app.put("/books/:bookID", async (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

// delete one book
app.delete("/books/:bookID", async (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
