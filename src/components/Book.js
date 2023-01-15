import React from "react";

// Book details to pass in
// Book Cover url
// Book Title
// Book Author

// State change on click? assign with book shelves

const Book = (props) => {
  const { book } = props;
  //Book Title
  const title = book.title;
  //Cover Image
  const cover = book.imageLinks.thumbnail;
  //What to do if no image? ternary? - Will need to get no cover image.
  //Set Cover Image Width and Height
  const coverWidth = 128;
  const coverHeight = 188;

  //Authos
  const authors = book.authors;
  //What if no author?
  //What if mutliple authors? can you use join here ? or concat?

  return (
    <li>
      <div className="book">
        <div className="book-top">
          {/* Change to thumbnail? */}
          <div
            className="book-cover"
            style={{
              width: coverWidth,
              height: coverHeight,
              backgroundImage: `url(${cover})`,
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
        {/* Change to Title Prop */}
        <div className="book-title">{title}</div>
        {/* Change to Author Prop */}
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

export default Book;
