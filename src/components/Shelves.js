import React from "react";
import Shelf from "./Shelf";
// import Book from "./Book";

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

export default Shelves;
