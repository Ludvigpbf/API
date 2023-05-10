const Book = require("./models/bookSchema");

exports.create = async (data) => {
  try {
    const newBook = new Book(data);
    const saveBook = newBook.save();
    if (!saveBook) throw new Error("Book could not be saved");
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

exports.readAll = async () => {
  try {
    const books = await Book.find({});
    if (!books) throw new Error("Books not found");
    return { error: null, data: books };
  } catch (error) {
    return { error: error.message, data: null };
  }
};

exports.read = async (id) => {
  try {
    const book = await Book.findById(id);
    if (!book) throw new Error("Book not found");
    return { error: null, data: books };
  } catch (error) {
    return { error: error.message, data: null };
  }
};

exports.update = async (id, data) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true });
    if (!updatedBook) throw new Error("Failed to update book");
    return { error: null, data: updatedBook };
  } catch (error) {
    return { error: error.message, data: null };
  }
};

exports.deleteOne = async (id) => {
  try {
    const isDeleted = await Book.findByIdAndDelete(id);
    if (!isDeleted) throw new Error("Failed to delete book");
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};
