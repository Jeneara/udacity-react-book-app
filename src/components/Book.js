import React from "react";

// Book details to pass in
// Book Cover url
// Book Title
// Book Author

// State change on click? assign with book shelves

const Book = (props) => {
  const book = props;
  //const thumbnail
  //What to do if no image? ternary? - Will need to get no cover image.
  //Make sure all images same size?

  //const author
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
              width: 128,
              height: 192,
              backgroundImage:
                'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
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
        <div className="book-title">{book.title}</div>
        {/* Change to Author Prop */}
        <div className="book-authors">J.R.R. Tolkien</div>
      </div>
    </li>
  );
};

export default Book;
