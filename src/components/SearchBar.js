import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = () => {
    window.event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <form onSubmit={onSubmit} className="my-3">
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Video Search"
        aria-label=".form-control-lg example"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchBar;
