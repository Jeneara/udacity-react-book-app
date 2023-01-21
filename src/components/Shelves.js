import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

const Shelves = (props) => {
  const { books, shelves } = props;
  let sortedBooks = [];
  return (
    <div className="list-books">
      <div className="list-books-content">
        {/* Map through shelves */}
        {shelves.map((shelf) => {
          sortedBooks = books.filter((book) => book.shelf === shelf.name);
          return (
            <Shelf
              key={shelf.name}
              currentShelf={shelf.name}
              books={sortedBooks}
              changeShelf={props.changeShelf}
            />
          );
        })}
      </div>
    </div>
  );
};

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
  //TODO Add shelf change proptype func.isRequried
};

export default Shelves;
