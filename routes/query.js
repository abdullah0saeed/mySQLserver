const express = require("express");
const router = express.Router();
const { query } = require("../controllers/select");

router.post("/", query);

module.exports = router;
