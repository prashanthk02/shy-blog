import React from "react";
import "../styles/filter.scss";

export default function FilterPost() {
  return (
    <div className="filter">
      <select name="category">
        <option value="all">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
  );
}
