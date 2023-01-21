import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

const Shelves = (props) => {
  const { books, shelves } = props;
  return (
    <div className="list-books">
      <div className="list-books-content">
        {/* Map through shelves */}
        {shelves.map((shelf) => (
          <Shelf key={shelf.name} shelfName={shelf.name} books={books} />
        ))}
      </div>
    </div>
  );
};

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  //TODO Add shelf change proptype func.isRequried
};

export default Shelves;
