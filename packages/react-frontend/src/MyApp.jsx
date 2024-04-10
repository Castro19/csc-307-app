import React, { useState } from "react";
import Table from "./Table";

function MyApp() {
  const [characters, setCharacters] = useState([
    {
      name: "Charlie",
      job: "Janitor",
    },
    {
      name: "Mac",
      job: "Bouncer",
    },
    {
      name: "Dee",
      job: "Aspring actress",
    },
    {
      name: "Dennis",
      job: "Bartender",
    },
  ]);

  function removeOneCharacter(index) {
    setCharacters(characters.filter((curr, i) => i != index));
  }
  return (
    <div className="container">
      <Table
        characterData={characters}
        removeOneCharacter={removeOneCharacter}
      />
    </div>
  );
}

export default MyApp;
