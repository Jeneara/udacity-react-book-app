import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Header from "./components/Header";
import Shelves from "./components/Shelves";

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
        {/* Set up React Router / Route */}
        {/* Show Header */}
        <Header />
        {/* Show shelves */}
        <Shelves books={books} shelves={shelves} />

        {/* TODO Set up React Router /search Route*/}
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BooksApp;
