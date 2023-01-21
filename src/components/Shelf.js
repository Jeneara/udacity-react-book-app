import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = (props) => {
  const { books, currentShelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{currentShelf}</h2>
      <div className="bookshelf-books">
        {/* TODO What does the shelf do if no books? */}
        {/* Map through books */}
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              changeShelf={props.changeShelf}
              currentShelf={currentShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  currentShelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
  //TODO Add shelf change proptype func.isRequried
};

export default Shelf;
