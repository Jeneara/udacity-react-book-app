import React from "react";
import Shelf from "./Shelf";

const Shelves = (props) => {
  const books = props;
  return (
    <div className="list-books">
      <div className="list-books-content">
        {/* Pass in shelf, state for each shelf is different */}
        <Shelf shelfName={"Currently Reading"} books={books} />
        <Shelf shelfName={"Want to Read"} books={books} />
        <Shelf shelfName={"Read"} books={books} />
      </div>
    </div>
  );
};

export default Shelves;
