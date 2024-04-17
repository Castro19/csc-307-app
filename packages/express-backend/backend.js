// backend.js: Creating a Back-end w/ CRUD Operations using HTTP Methods
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;
app.use(cors());

app.use(express.json());

let users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor",
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer",
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor",
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress",
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender",
    },
  ],
};

const generateID = () => {
  return Math.random();
};
// Read: HTTP Get Method to get an array of objects given a name that matches
const findUserByName = (name) => {
  return users["users_list"].filter((user) => user.name === name);
};

app.get("/users", (req, res) => {
  const name = req.query.name;
  if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

// Read: HTTP Get Method to return an object that matches with the unique identifier
const findUserById = (id) => {
  return users["users_list"].find((user) => user.id === id);
};
app.get("/users/:id", (req, res) => {
  const id = req.params["id"];
  let result = findUserById(id);

  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(json.stringify(result));
  }
});

// Write: Post HTTP method when given a JSON object on client, it adds it to our list of users.
const addUser = (newUser) => {
  newUser["id"] = generateID(); // Generate a random ID
  users["users_list"].push(newUser);
  return newUser;
};

app.post("/users", (req, res) => {
  const newUser = req.body;
  addUser(newUser);
  res.status(201).send(newUser);
});

const deleteUserByID = (userId) => {
  const initialLength = users["users_list"].length;
  users["users_list"] = users["users_list"].filter((user) => user.id != userId);
  const newLength = users["users_list"].length;
  return newLength < initialLength; // Returns true if a user was deleted
};

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const userDeleted = deleteUserByID(userId);

  if (!userDeleted) {
    console.log("No user found with ID: ", userId);
    return res.status(404).send({ message: "User not found" }); // No user was deleted
  }

  console.log("Updated User List: ", users["users_list"]);
  res.status(204).send(); // Successful deletion, no content to return
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
