import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import { Route, Routes } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],

    shelves: [
      { key: "currentlyReading", name: "Currently Reading" },
      { key: "wantToRead", name: "Want to Read" },
      { key: "read", name: "Read" },
    ],
  };

  //TODO Fetch Search Data
  //TODO How are we going to filter through the shelves?
  //TODO Update book State - Shelf change
  //TODO Set up react route routes / and /search

  //Fetch data
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

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
            path="/"
            element={<Shelves books={books} shelves={shelves} />}
          />
          {/* Search Page */}
          <Route
            path="/search"
            element={
              <button
                className={"open-search"}
                onClick={() => this.setState({ showSearchPage: true })}
              >
                Add a book
              </button>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
