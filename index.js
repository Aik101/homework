"use strict";


const port = global.process.env.PORT || 3000;


const app = require("express")();
const bodyParser = require("body-parser");
const db = require("node-json-db");


app.set("views", "./views");
app.set("view engine", "pug");


app.listen(port, () => {
  console.log(`Start on port ${ port }`);
  return undefined;
});


app.get("/", (req, res) => {
  app.render("about");
  return undefined;
});
