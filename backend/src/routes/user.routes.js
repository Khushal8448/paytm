const express = require("express");
const {
  signup,
  signin,
  updateUser,
  getFilteredUsers,
} = require("../controllers/user.controllers.js");
const { authMiddleware } = require("../../utils/middleware.js");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.put("/", authMiddleware, updateUser);
userRouter.get("/bulk", authMiddleware, getFilteredUsers);

module.exports = userRouter;
