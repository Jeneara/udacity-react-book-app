import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

// TODO Set up link to homepage
// TODO set up search api

class Search extends React.Component {
  state = {
    searchResults: [],
    searchQuery: "",
  };

  //Add search query code here

  render() {
    const { searchResults } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* Link to homepage */}
          <Link to="/">
            <button className="close-search">Add a bookClose</button>
          </Link>

          {/* Search Input */}
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchQuery}
              onChange={(event) => this.searchResults(event)}
            />
          </div>
        </div>

        {/* Display Search Results */}
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.map((book) => (
              <Book key={book.id} book={book} changeShelf={this.changeShelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
