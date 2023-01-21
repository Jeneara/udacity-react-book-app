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

    shelves: [
      { key: "currentlyReading", name: "Currently Reading" },
      { key: "wantToRead", name: "Want to Read" },
      { key: "read", name: "Read" },
    ],
  };

  //Fetch data
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  //Change Shelves
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books });
      });
    });
  };

  //TODO Fetch Search Data
  //TODO How are we going to filter through the shelves?
  //TODO update Prop types

  // extra function add loading to pages {isloading ? ()}

  render() {
    //Book Const
    const { books, shelves } = this.state;
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
                  <Shelves
                    books={books}
                    shelves={shelves}
                    changeShelf={this.changeShelf}
                  />
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
          <Route path="/search" element={<Search books={books} />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
