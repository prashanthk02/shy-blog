import React from "react";
import "../styles/filter.scss";

export default function FilterPost({ filterValueSelected }) {
  return (
    <div className="filter">
      <button name="category" value="All" onClick={(e)=>filterValueSelected(e.target.value)}>All</button>
      <button name="category" value="A" onClick={(e)=>filterValueSelected(e.target.value)}>A</button>
      <button name="category" value="B" onClick={(e)=>filterValueSelected(e.target.value)}>B</button>
      <button name="category" value="C" onClick={(e)=>filterValueSelected(e.target.value)}>C</button>
    </div>
  );
}
