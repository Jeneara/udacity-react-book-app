import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import noCoverFoundThumbail from "../images/noCoverFoundThumbnail.png";

const Book = (props) => {
  const { book } = props;

  //Book Title
  const bookTitle = book.title === undefined ? "Unknown Title" : book.title;

  //Cover Image
  const bookCover =
    book.imageLinks === undefined
      ? noCoverFoundThumbail
      : book.imageLinks.thumbnail;

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
          <ShelfChanger book={book} updateShelf={props.updateShelf} />
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Book;
