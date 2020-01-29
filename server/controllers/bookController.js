const books = [
  {
    name: "A People's History of the United States",
    image:
    "https://www.google.com/books/edition/A_People_s_History_of_the_United_States/DhsiGEoATiMC?hl=en&gbpv=1&printsec=frontcover"
  },

  {
    name: "1776",
    image:
    "https://www.google.com/books/edition/1776/uu1mC6zWNTwC?hl=en&gbpv=1&printsec=frontcover"
  },

  {
    name: "Scribes, Script, and Books",
    image:
    "https://www.google.com/books/edition/Scribes_Script_and_Books/4q1MHDoFVwkC?hl=en&gbpv=1&printsec=frontcover"
  }
]

const getBooks = (req, res) => {
  res.json(books);
};

const addBook = (req, res) => {
  const { name, image } = req.body;
  if (!name || !image) {
    return res.status(417).json("Name and image are required");
  }
  books.push({ name, image: image });
  res.json(books);
};

const updateBook = (req, res) => {
  const { name } = req.params;
  const selectedElement = books.find(book => book.name === name);
  selectedElement.name = req.body.name;
  res.json(books);
};

module.exports = {
  getBooks,
  addBook,
  updateBook
};