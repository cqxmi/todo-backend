var express = require("express");
var router = express.Router();
var todosSelector = require("../controllers/todosController");

/* GET users listing. */
router.get("/get", todosSelector.selectAll);

module.exports = router;
