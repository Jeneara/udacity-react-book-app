import React from "react";

// State change on click? assign with book shelves

const Book = (props) => {
  const { book } = props;

  //Book Title
  const bookTitle = book.title === undefined ? "Unknown Title" : book.title;

  //Cover Image
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
          {/* Book shelf changer move to seperate component?*/}
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    </li>
  );
};

export default Book;
