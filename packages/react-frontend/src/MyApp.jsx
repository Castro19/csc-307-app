import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  // State variable: A list that displays the data for the table
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index) {
    setCharacters(characters.filter((curr, i) => i != index));
  }

  //   Callback function that updates our character state variable when a form is submitted
  function updateList(person) {
    setCharacters([...characters, person]);
  }
  return (
    <div className="container">
      <Table
        characterData={characters}
        removeOneCharacter={removeOneCharacter}
      />
      <Form updateList={updateList} />
    </div>
  );
}

export default MyApp;
