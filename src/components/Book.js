import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

const Book = (props) => {
  const { book, changeShelf, currentShelf } = props;

  //Book Title
  const bookTitle = book.title === undefined ? "Unknown Title" : book.title;

  //Cover Image
  //TODO What if no cover? dummy cover
  const bookCover = book.imageLinks.thumbnail;

  //Set Cover Image Width and Height
  const coverWidth = 128;
  const coverHeight = 188;

  //Authors
  const bookAuthors =
    book.authors === undefined ? "Unknown Authors" : book.authors.join(", ");

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: coverWidth,
              height: coverHeight,
              backgroundImage: `url(${bookCover})`,
            }}
          ></div>
          <ShelfChanger
            book={book}
            changeShelf={changeShelf}
            currentShelf={currentShelf}
          />
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  //TODO Add shelf change proptype func.isRequried
};

export default Book;
