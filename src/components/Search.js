import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

// TODO set up search api that updates

class Search extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
  };
  state = {
    searchResults: [],
    searchQuery: "",
    searchError: false,
  };

  //Search query
  searchBooks = (searchQuery) => {
    //Save the query
    this.setState(() => ({ searchQuery: searchQuery }));

    if (searchQuery.length !== 0) {
      BooksAPI.search(searchQuery).then((searchResults) => {
        //If error return SearchError = True
        if (searchResults.error) {
          this.setState({ searchResults: [], searchError: true });
        } else {
          //Set searchResults
          this.setState({ searchResults: searchResults, searchError: false });
        }
      });
    } else {
      //Set as default state
      this.setState({ searchResults: [], searchError: false });
    }
  };

  render() {
    const { searchResults, searchQuery, searchError } = this.state;
    const { updateShelf, books } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* Link to homepage */}
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          {/* Search Input */}
          <div className="search-books-input-wrapper">
            {/* {JSON.stringify(this.state)} */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchQuery}
              onChange={(event) => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        {/* Display Search Results */}
        <div className="search-books-results">
          <ol className="books-grid">
            {/* Map through search results */}
            {searchResults.map((searchResultsBook) => {
              //Set searchResultsBook.shelf to 'none' as default
              searchResultsBook.shelf = "none";
              books.forEach((book) => {
                //If match found set searchResultsBook.shelf to Book.shelf
                if (book.id === searchResultsBook.id) {
                  searchResultsBook.shelf = book.shelf;
                }
              });

              return (
                <Book
                  key={searchResultsBook.id}
                  book={searchResultsBook}
                  updateShelf={updateShelf}
                />
              );
            })}
          </ol>
          {/* If searchError = true return error message */}
          {searchError === true && (
            //TODO Add some styling
            <h3 className="search-books-results-heading">
              Hmm looks like no books where found. Please try another search
              query.
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
