const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fakeDb = require("./loadFiles");
const PORT = 8080;

const files = fakeDb.readFilesSync(path.join(__dirname, "/src/recipies/"));

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "src", "index.tsx"));
});

app.get("/search", (req, res) => {
  const q = req.query.q;
  res.json({ recipies: fakeDb.filterRecipies(q, files) });
});
app.get("/recipie/:id", (req, res, next) => {
  const id = req.params.id;
  const fileContents = fakeDb.loadFileDetails(id);
  res.json({ body: fileContents });
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
