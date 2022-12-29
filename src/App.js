import React from "react";
import NewBookForm from "./components/book-form";
import BookList from "./components/book-list";
import Navbar from "./components/navbar";
import BookContextProvider from "./contexts/contexts";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
