# 8. Express REST API + Postman

> Core idea: **GET, POST, PUT, DELETE** = CRUD

## ▶ Start (terminal)

```bash
cd "C:\Users\Numan ghori\Desktop\FSD"
mkdir Exp8
cd Exp8
npm init -y
npm install express
```

Then New File → **server.js**

## 📄 Code: server.js

```javascript
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
```

## 🏁 End

1. ⚠️ **Ctrl + S** (no ● dot on the tab), then:

```bash
node server.js
```

You should see **Server running on port 3000**.

2. Test in **Postman** (for POST and PUT: Body → raw → JSON):

| # | Method | URL | Body |
|---|---|---|---|
| 1 | GET | http://localhost:3000/books | — |
| 2 | POST | http://localhost:3000/books | {"title": "Gitanjali", "author": "Tagore"} |
| 3 | PUT | http://localhost:3000/books/1 | {"title": "Ignited Minds", "author": "Kalam"} |
| 4 | DELETE | http://localhost:3000/books/1 | — |

3. Run GET again after each change to show the data changed.
4. Stop: **Ctrl + C**
