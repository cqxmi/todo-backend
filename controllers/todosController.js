const mysql = require("../db/mysql");
const todoService = require("../service/todoService");

//todos的所有查询操作
const todosSelector = {
  //根据user_id查询todos
  select: async (req, res) => {
    //作参数校验,checked是否是0、1
    if (!req.query.userId || !req.query.checked) {
      res.json({
        code: 1,
        message: "参数不能为空",
      });
      return;
    }
    mysql
      .query(todoService.select(req.query.userId, req.query.checked))
      .then((data) => {
        let jsonData = JSON.parse(JSON.stringify(data));
        res.status(200).json({
          code: 0,
          message: "请求成功",
          data: jsonData,
        });
      })
  },
};

module.exports = todosSelector;
