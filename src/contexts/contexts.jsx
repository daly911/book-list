import React, { useState, createContext } from "react";
import { v1 as uuid1 } from "uuid";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", author: "Patrick Rothfuss", id: 1 },
    { title: "The final empire", author: "brandon sanderson", id: 2 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid1() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
