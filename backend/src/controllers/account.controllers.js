const Account = require("../models/account.models.js");
const mongoose = require("mongoose");

const getBalance = async (req, res) => {
  const account = await Account.findById({ userId: req.userId });

  return res.status(200).json({
    balance: account.balance,
  });
};

const transferMoney = async () => {
  const session = await mongoose.startSession();

  // STARTING THE TRANSACTION
  session.startTransaction();
  const { to, amount } = req.body;

  const account = await Account.findById({ userId: req.userId }).session(session);

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    res.status(400).json({
      message: "Account does not exists or You don't have enough money in your account",
    });
  }

  const toAccount = await Account.findById({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    res.status(400).json({
      message: "The account whom you are trying to send money does not exists",
    });
  }

  // PERFORMING THE TRANSFER
  await Account.findByIdAndUpdate(
    { userId: req.userId },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);

  await Account.findByIdAndUpdate(
    { userId: to },
    {
      $inc: {
        balance: balance,
      },
    }
  ).session(session);

  // COMMIT THE TRANSACTION
  await session.commitTransaction();

  res.status(200).json({
    message: "Transaction successful",
  });
};

module.exports = {
  getBalance,
  transferMoney,
};
