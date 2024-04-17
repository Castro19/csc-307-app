import React, { useEffect, useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  // State variable: A list that displays the data for the table
  const [characters, setCharacters] = useState([]);

  // Runs on the first render when our component is mounted
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/users");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setCharacters(data["users_list"]);

        return data;
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchUsers();
  }, []);

  // Handler Function that updates our List
  async function updateList(person) {
    try {
      const userPosted = await postUser(person);
      console.log("Updated person: ", userPosted);
      setCharacters([...characters, userPosted]);
    } catch (error) {
      console.log("Error updating Character List: ", error);
    }
  }

  // Helper function that makes the fetch request to the server to update our characters on the server-side
  const postUser = async (person) => {
    console.log("New Person: ", person);
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      };
      const response = await fetch("http://localhost:8000/users", options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error posting new user: ", error);
    }
  };

  // Handler Function when the user removes a character
  async function removeOneCharacter(index) {
    const id = characters.find((_, i) => index === i).id;
    try {
      if (id !== undefined) {
        await deleteUser(id);
        setCharacters(characters.filter((curr) => curr.id !== id));
      }
    } catch (error) {
      console.log("Error Removing Character: ", error);
    }
  }

  // Helper function that makes the fetch request to the server and removes the character on the server side.
  const deleteUser = async (id) => {
    console.log("USer ID bein deleted: ", id);
    try {
      const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error with the deleting request made");
      }
    } catch (error) {
      console.log("Error Deleting User: ", error);
    }
  };

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
