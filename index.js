const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = express.Router();
const recruiterRoute = require("./Routes");
const path = require("path");

dotenv.config();

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to DB"))
  .catch(console.log("cant connect to the database"));

const app = express();

app.use(express.json());
app.use("/api", recruiterRoute);
var filePath = "./client/build/index.html";
var resolvedPath = path.resolve(filePath);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(peocess.env.PORT || 5000, () => {
  console.log("backend is running");
});
