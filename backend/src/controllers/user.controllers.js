const z = require("zod");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models.js");
const Account = require("../models/account.models.js");

const signupBody = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});

const signinBody = z.object({
  username: z.string().email(),
  password: z.string(),
});

const updateBody = z.object({
  username: z.string().email().optional(),
  password: z.string().optional(),
  fistName: z.string().optional(),
  lastName: z.string().optional(),
});

const signup = async (req, res) => {
  const { success } = signupBody.safeParse(req.body);

  console.log(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;

  //--------- Create new account ----------//
  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
};

const signin = async (req, res) => {
  console.log(req.body);
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET
    );

    return res.status(200).json({
      token: token,
    });
  }

  return res.status(411).json({
    message: "Error while logging in",
  });
};

const updateUser = async (req, res, next) => {
  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      Error: "Invalid inputs",
    });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    return res.send(200).json({
      message: "Updated successfully",
      data: rest,
    });
  } catch (error) {
    res.send(500).json({
      message: "unsuccessful",
      error: error,
    });
  }
};

const getFilteredUsers = async (req, res, next) => {
  const filter = req.query.filter || "";
  console.log(filter);
  // const newFilter = filter.toLowarCase();

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  return res.status(200).json({
    users: users.map((user) => ({
      username: user.username,
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
    })),
  });
};

module.exports = { signup, signin, updateUser, getFilteredUsers };
