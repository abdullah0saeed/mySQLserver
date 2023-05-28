const express = require("express");
const { db } = require("./config/db");
const insertRouter = require("./routes/insert");

const app = express();

app.use(express.json());

app.use("/insert", insertRouter);

const port = 9000;

app.listen(port, () => {
  console.log("server is running on port 9000");
});

db();
