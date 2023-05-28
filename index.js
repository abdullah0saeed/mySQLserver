const express = require("express");
const cors = require("cors");
const { db } = require("./config/db");
const insertRouter = require("./routes/insert");
const queryRouter = require("./routes/query");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/insert", insertRouter);
app.use("/query", queryRouter);

const port = 9000;

app.listen(port, () => {
  console.log("server is running on port 9000");
});

db();
