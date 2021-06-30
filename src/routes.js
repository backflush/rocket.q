const express = require("express");

const QuestionController = require("./controllers/QuestionController");

const routes = express.Router();

routes.get("/", (req, res) => res.render("index", { page: "enter-room" }));

routes.get("/create-pass", (req, res) => res.render("index", { page: "create-pass" }));

routes.get("/room", (req, res) => res.render("room"));

routes.post("/room/:room/:question/:action", QuestionController.index);

module.exports = routes;