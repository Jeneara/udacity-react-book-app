import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = (props) => {
  const { books, currentShelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{currentShelf.name}</h2>
      <div className="bookshelf-books">
        {/* If no books on shelf return message  */}
        {books.length <= 0 ? (
          <h2 className="bookself-empty">
            There are no books on this shelf at the moment.
          </h2>
        ) : (
          <ol className="books-grid">
            {/* Map through books */}
            {books &&
              books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  updateShelf={props.updateShelf}
                />
              ))}
          </ol>
        )}
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Shelf;
