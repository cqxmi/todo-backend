const mysql = require("../db/mysql");
const todoService = require("../service/todoService");

//todos的所有查询操作
const todosSelector = {
  //查询所有todos
  selectAll: (req, res) => {
    mysql.query(todoService.selectAll).then((data) => {
      let jsonData = JSON.parse(JSON.stringify(data));
      res.json({
        data: jsonData,
      });
    });
  },
};

module.exports = todosSelector;
