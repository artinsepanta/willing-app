const express = require("express");
const bookController = require("./controllers/bookController");
const app = express();

app.use(express.json());

app.get("/api/books", bookController.getBooks);
app.post("/api/books", bookController.addBook);
app.put("/api/books/:name", bookController.updateBook);

const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));