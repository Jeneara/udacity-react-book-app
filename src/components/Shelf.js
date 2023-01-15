import React from "react";
import Book from "./Book";

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      {/* Need to pass in name props of shelf - Currently Reading, Want to Read and Read */}
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        {/* Pass in books */}
        {/* /* {props.books.map((book) => (
        <Book />
        ))} */}
        {/* Will need to pass a key as well */}
        <Book />
      </div>
    </div>
  );
};

export default Shelf;
