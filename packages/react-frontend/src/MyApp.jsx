import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index) {
    setCharacters(characters.filter((curr, i) => i != index));
  }
  return (
    <div className="container">
      <Table
        characterData={characters}
        removeOneCharacter={removeOneCharacter}
      />
      <Form />
    </div>
  );
}

export default MyApp;
