import React from "react";
import Book from "./Book";

const Shelf = (props) => {
  const { books } = props;
  return (
    <div className="bookshelf">
      {/* Need to pass in name props of shelf - Currently Reading, Want to Read and Read */}
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        {/* What does the shelf do if no books? */}
        {/* Map through books */}
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
