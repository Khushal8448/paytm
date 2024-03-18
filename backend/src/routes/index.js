const express = require("express");
const userRouter = require("./user.routes.js");
const accountRouter = require("./account.routes.js");
const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/account", accountRouter);

module.exports = rootRouter;
