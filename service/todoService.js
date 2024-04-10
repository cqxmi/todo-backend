//todos的所有查询语句
const todoService = {
  //根据user_id和type查询todos
  select: (id, checked) =>
    `SELECT * FROM todos WHERE user_id = ${id} AND checked = '${checked}';`,
};

module.exports = todoService;
