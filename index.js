const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "TODO"});
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
const db = require("./queries");

app.get("/tasks", db.getTasks);
app.get("/tasks/:id", db.getTaskById);
app.post("/tasks", db.createTask);
app.put("/tasks/:id", db.updateTask);
app.delete("/tasks/:id", db.deleteTask);
