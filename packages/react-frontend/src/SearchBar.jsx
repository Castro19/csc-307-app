import React, { useState } from "react";

const SearchBar = ({ setCharacters }) => {
  const [searchedItem, setSearchedItem] = useState("");
  const [searchOption, setSearchOption] = useState("id");
  const handleTextChange = (e) => {
    const name = e.target.value;
    setSearchedItem(name);
  };
  const handleOptionChange = (e) => {
    const option = e.target.value;
    console.log(option);
    setSearchOption(option);
  };
  async function submitSearchForm() {
    console.log("Searched Item: ", searchedItem);
    console.log("Searched Option: ", searchOption);

    try {
      const data = await queryResult(searchedItem, searchOption);
      console.log(data);
      setCharacters(data);
    } catch (error) {
      console.log("Error querying: ", error);
    } finally {
      setSearchedItem("");
    }
  }
  const resetForm = async () => {
    const data = await queryResult("", "");

    setCharacters(data);
  };

  const queryResult = async (item, option) => {
    let url;

    if (item === "") {
      url = "http://localhost:8000/users";
    } else if (option === "id") {
      url = `http://localhost:8000/users/${item}`;
    } else {
      url = `http://localhost:8000/users?${option}=${item}`;
    }

    console.log(`url: ${url}`);

    const response = await fetch(url);

    if (!response.ok) {
      console.log(`Error fetching this url: ${url}`);
    }

    const data = await response.json();

    if (option === "id") {
      return [data["users_list"]];
    } else {
      return data["users_list"];
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="item">Search</label>
        <input
          type="text"
          name="item"
          id="item"
          value={searchedItem}
          onChange={handleTextChange}
        />
        <select onChange={handleOptionChange}>
          <option value="id">ID</option>
          <option value="job">Job</option>
          <option value="name">Name</option>
        </select>
        <input type="button" value="Query" onClick={submitSearchForm} />
        <input type="button" value="Reset" onClick={resetForm} />
      </form>
    </div>
  );
};

export default SearchBar;
