import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = (props) => {
  const { books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        {/* TODO What does the shelf do if no books? */}
        {/* Map through books */}
        <ol className="books-grid">
          {books
            // .filter((book) => book.shelfName === props.shelfName)
            .map((book) => (
              <Book key={book.id} book={book} />
            ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  //TODO Add shelf change proptype func.isRequried
};

export default Shelf;
