const express = require("express");
const router = express.Router();
const { query } = require("../controllers/query");

router.post("/", query);

module.exports = router;
