const express = require("express");
const router = express.Router();
const { getRandomQuote, getQuotes, addQuote } = require("./actions");

router.route("/").get(getQuotes).post(addQuote);
router.route("/random").get(getRandomQuote);

module.exports = router;
