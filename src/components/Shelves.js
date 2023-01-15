import React from "react";
import Shelf from "./Shelf";

const Shelves = () => (
  <div className="list-books-content">
    {/* Pass in shelf, state for each shelf is different */}
    <Shelf shelfName={"Currently Reading"} />
    <Shelf shelfName={"Want to Read"} />
    <Shelf shelfName={"Read"} />
  </div>
);

export default Shelves;
