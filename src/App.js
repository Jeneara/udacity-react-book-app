import React from "react";
// import * as BooksAPI from "./BooksAPI";
import "./App.css";
// import Book from "./components/Book";
// import Shelf from "./components/Shelf";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import Search from "./components/Search";

// const books = BooksAPI;
// console.log(books);
// function BookApp(props) {
//   return (
//   )
// }

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          // Bookshelves
          <div className="list-books">
            {/* Show Header */}
            <Header />
            {/* Show shelves */}
            <Shelves />
            {/* Open Search state change (Route change?)*/}
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
