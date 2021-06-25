const express = require("express");
const path = require("path");

const app = express();

const routes = require("./routes");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.set("views", path.join(__dirname, "views"));

app.listen(3000, () => {
    console.log("Running...");
});