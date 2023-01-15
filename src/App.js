import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Header from "./components/Header";
import Shelves from "./components/Shelves";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  //Fetch data
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    //Book Const
    const { books } = this.state;
    return (
      <div className="app">
        {/* Route book */}
        {/* Show Header */}
        <Header />
        {/* Show shelves */}
        <Shelves books={books} />

        {/* Route search */}
        {/* Open Search state change (Route change?)*/}
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
