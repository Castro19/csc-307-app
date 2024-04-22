// backend.js: Creating a Back-end w/ CRUD Operations using HTTP Methods
import express from "express";
import cors from "cors";
import users from "./routes/user.js";

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
