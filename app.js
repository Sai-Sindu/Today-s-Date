const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let todaysdate = new Date();
  response.send(
    `${todaysdate.getDate()}-${
      todaysdate.getMonth() + 1
    }-${todaysdate.getFullYear()}`
  );
});

app.listen(3001);

module.exports = app;
