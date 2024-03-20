const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(req.headers);

  console.log(req.body);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json("You are not verified");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(403).json({});
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);

//     req.userId = decoded.userId;

//     next();
//   } catch (err) {
//     return res.status(403).json({ err });
//   }
// };

module.exports = {
  authMiddleware,
};
