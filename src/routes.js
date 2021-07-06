const express = require("express");

const QuestionController = require("./controllers/QuestionController");
const RoomController = require("./controllers/RoomController");

const routes = express.Router();

routes.get("/", (req, res) => res.render("index", { page: "enter-room" }));

routes.get("/create-pass", (req, res) => res.render("index", { page: "create-pass" }));

routes.get("/room/:room", RoomController.open);

routes.post("/question/:room/:question/:action", QuestionController.index);

routes.post("/question/create/:room", QuestionController.create);

routes.post("/create-room", RoomController.create);

module.exports = routes;