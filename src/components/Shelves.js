import React from "react";
import Shelf from "./Shelf";
// import Book from "./Book";

const Shelves = (props) => {
  const { books } = props;
  return (
    <div className="list-books">
      <div className="list-books-content">
        {/* Pass in shelf, state for each shelf is different
        Use a map to change shelf so code is DRY */}
        <Shelf
          key={"Currently Reading"}
          shelfName={"Currently Reading"}
          books={books}
        />
      </div>
    </div>
  );
};

export default Shelves;
