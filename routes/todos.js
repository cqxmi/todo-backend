var express = require("express");
var router = express.Router();
var todosSelector = require("../controllers/todosController");

//获取todos
router.get("/getTodos", todosSelector.select);

module.exports = router;
