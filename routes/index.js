var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    message: "Welcome to API Server",
    endpoints: {
      users: "/users",
      roles: "/roles",
      products: "/api/v1/products",
      categories: "/api/v1/categories",
    },
  });
});

module.exports = router;
