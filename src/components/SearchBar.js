import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = () => {
    window.event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="row my-3 d-flex align-items-center justify-content-between"
    >
      <div className="col-9 col-md-10">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Video Search"
          aria-label=".form-control-lg example"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        ></input>
      </div>
      <div className="col-3 col-md-2">
        <button type="submit" class="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
