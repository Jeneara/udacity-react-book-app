import React from "react";
import Shelf from "./Shelf";

const Shelves = () => {
  return (
    <div className="list-books-content">
      {/* Pass in shelf */}
      <Shelf />
      <Shelf />
      <Shelf />
    </div>
  );
};

export default Shelves;
