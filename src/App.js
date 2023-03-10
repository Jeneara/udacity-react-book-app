import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import { Route, Routes, Link } from "react-router-dom";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  //Fetch data from API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books,
      }));
    });
  }

  //Update Shelves - Callback setState
  //Code sourced from React Fundementals Section 9. Update state with setState
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((currentState) => ({
        books: currentState.books
          .filter((b) => b.id !== book.id)
          .concat({ book }),
      }));
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books });
      });
    });
  };

  render() {
    //Book Const
    const { books } = this.state;
    return (
      <div className="app">
        {/* Show Header */}
        <Header />
        {/* Routing */}
        <Routes>
          {/* Homepage */}
          <Route
            exact
            path="/"
            element={
              <div className="main-page">
                <div className="book-shelves">
                  <Shelves books={books} updateShelf={this.updateShelf} />
                </div>
                {/* Add a book button */}
                <div className="open-search">
                  <Link to="/search">
                    <button>Add a book</button>
                  </Link>
                </div>
              </div>
            }
          />
          {/* Search Page */}
          <Route
            path="/search"
            element={<Search books={books} updateShelf={this.updateShelf} />}
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
