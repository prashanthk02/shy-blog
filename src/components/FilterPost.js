import React from "react";
import "../styles/filter.scss";

export default function FilterPost({ filterValueSelected }) {
  return (
    <div className="filter">
      <button
        name="category"
        value="Lifestyle"
        onClick={(e) => filterValueSelected(e.target.value)}
      >
        Life Style
      </button>

      <button
        name="category"
        value="Travel"
        onClick={(e) => filterValueSelected(e.target.value)}
      >
        Travel
      </button>

      <button
        name="category"
        value="Food"
        onClick={(e) => filterValueSelected(e.target.value)}
      >
        Food
      </button>

      <button
        name="category"
        value="Social"
        onClick={(e) => filterValueSelected(e.target.value)}
      >
        Social
      </button>

      <button
        name="category"
        value="All"
        onClick={(e) => filterValueSelected(e.target.value)}
      >
        All
      </button>
    </div>
  );
}
