import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import "./Search.css";
const Search = ({ showSearchArea, setShowSearchArea }) => {
  const [value, setValue] = useState("");
  // Should store search history in local storage.

  // Default search history
  const [searchHistory, setSearchHistory] = useState([
    {
      id: 1,
      searchTerm: "Indiana",
    },
  ]);

  function handleSearch(e) {
    e.preventDefault();
    console.log(value);
    setSearchHistory({ ...searchHistory, searchTerm: e.value });
    console.log(searchHistory);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <section className="close-btn-section">
        <CgClose
          className="close-btn"
          color="#e7e7eb"
          onClick={() => {
            setShowSearchArea(false);
          }}
        />
      </section>
      <form onSubmit={handleSearch}>
        <div>
          <ImSearch className="search-icon" color="#616475" />
          <input type="text" onChange={handleChange} value={value} placeholder="search location" />
        </div>
        <button>Search</button>
      </form>
      <section className="search-history-section"></section>
    </>
  );
};

export default Search;
