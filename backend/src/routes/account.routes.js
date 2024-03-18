const express = require("express");
const { authMiddleware } = require("../../utils/middleware");
const { getBalance, transferMoney } = require("../controllers/account.controllers");

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, getBalance);
accountRouter.post("/transfer", authMiddleware, transferMoney);

module.exports = accountRouter;
