const express = require("express");

const { router } = require("./router");

const { data } = require("./database/pg-config");

const app = express();

app.use(express.json());
app.use(router);

const main = async () => {
  await data.conn();
  app.listen(5433, () => {
    console.log("App running in http://localhost:5433/");
  });
}

main()