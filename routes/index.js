var express = require("express");
var router = express.Router();

const todosRouter = require("./todos");

router.use("/api/todos", todosRouter); // 注入todo路由模块

module.exports = router;
