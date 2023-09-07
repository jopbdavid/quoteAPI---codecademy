const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const getRandomQuote = (req, res) => {
  const quote = getRandomElement(quotes);

  res.status(200).send({ quote });
};

const getQuotes = (req, res) => {
  console.log(req.query);
  const { person } = req.query;
  let queryList = [];

  if (person) {
    queryList = quotes.filter((quote) => {
      return quote.person === person;
    });
  } else {
    queryList = quotes;
  }

  res.status(200).send({ quotes: queryList });
};

const addQuote = (req, res) => {
  if (req.query.quote && req.query.person) {
    const quote = { quote: req.query.quote, person: req.query.person };
    res.status(201).send({ quote });
  } else {
    res.status(400).send("Please provide a valid quote and author.");
  }
};

module.exports = { getRandomQuote, getQuotes, addQuote };
