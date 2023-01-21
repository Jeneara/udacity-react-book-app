import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = (props) => {
  const { books, currentShelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{currentShelf}</h2>
      <div className="bookshelf-books">
        {/* If no books on shelf return message  */}
        {books.length <= 0 ? (
          <h2 className="bookself-empty">There are no books on this shelf.</h2>
        ) : (
          <ol className="books-grid">
            {/* Map through books */}
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                changeShelf={props.changeShelf}
                currentShelf={currentShelf}
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
  currentShelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
  //TODO Add shelf change proptype func.isRequried
};

export default Shelf;
