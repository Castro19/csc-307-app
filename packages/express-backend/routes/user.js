import express from "express";
import userServices from "../models/userServices.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const name = req.query["name"];
  const job = req.query["job"];
  try {
    const result = await userServices.getUsers(name, job);
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await userServices.findUserById(id);

  console.log("RESULT ID LIST: ", result);

  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ users_list: result });
  }
});

router.post("/", async (req, res) => {
  const user = req.body;
  const savedUser = await userServices.addUser(user);
  if (savedUser) res.status(201).send(savedUser);
  else res.status(500).end();
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userServices.deleteUserByID(id);
    console.log(result);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting item");
  }
});
export default router;
