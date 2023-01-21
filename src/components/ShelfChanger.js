import React from "react";
import PropTypes from "prop-types";

const ShelfChanger = (props) => {
  const { book, changeShelf, currentShelf } = props;
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={currentShelf}
        onChange={(event) => changeShelf(book, event.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  //TODO Add shelf change proptype func.isRequried
};

export default ShelfChanger;
