import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

const Shelves = (props) => {
  const { books } = props;
  const shelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];

  return (
    <div className="list-books">
      <div className="list-books-content">
        {/* Map through shelves */}
        {shelves.map((shelf, index) => (
          <Shelf
            key={index}
            currentShelf={shelf}
            books={books && books.filter((book) => book.shelf === shelf.key)}
            updateShelf={props.updateShelf}
          />
        ))}
      </div>
    </div>
  );
};

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Shelves;
