const express = require("express");
const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "Wings of Fire", author: "Kalam" }
];

// GET - read all books
app.get("/books", (req, res) => {
    res.json(books);
});

// POST - add a book
app.post("/books", (req, res) => {
    let newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.json(newBook);
});

// PUT - update a book
app.put("/books/:id", (req, res) => {
    let book = books.find(b => b.id == req.params.id);
    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});

// DELETE - remove a book
app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.send("Book deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
