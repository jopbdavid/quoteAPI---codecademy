const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

const quotesRoutes = require("./quotesRoute");

app.use(express.static("public"));
app.use(express.json());

app.use("/api/quotes", quotesRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
