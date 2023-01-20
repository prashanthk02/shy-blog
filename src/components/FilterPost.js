import React from "react";
import "../styles/filter.scss";

export default function FilterPost({ filterValueSelected }) {
  return (
    <div className="filter">
      <select
        name="category"
        onChange={(e) => filterValueSelected(e.target.value)}
      >
        <option value="all">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
  );
}
