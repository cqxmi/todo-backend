var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // 模拟数据，实际情况下可能是从数据库或其他地方获取
  const responseData = {
    code: 200, // 自定义状态码，表示成功
    data: {
      // 这里放置你的数据对象，可以是任何你需要返回的内容
      message: "User data retrieved successfully",
      user: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      },
    },
    success: true, // 标识请求是否成功的布尔值
  };

  // 发送 JSON 响应
  res.json(responseData);
});

module.exports = router;
