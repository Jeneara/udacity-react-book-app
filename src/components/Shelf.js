import React from "react";
import Book from "./Book";

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      {/* Need to pass in name props of shelf - Currently Reading, Want to Read and Read */}
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        {/* What does the shelf do if no books? */}

        {/* Move BookGrid here */}
        <ol className="books-grid">
          {props.books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
          {/* map((book) => (
          <Book key={book.id} book={book} />
          ))} */}
          {/* {books.map((book) => (
            <Book key={book.id} book={book} />
          ))} */}
          {/* {props.books.map((book) => (
          <Book key={book.id} book={book} />
        ))} */}
          {/* Will need to pass a key as well */}
          {/* <Book /> */}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
