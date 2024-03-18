const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json("You are not verified");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json("Token is not verified");

      req.userId = decoded.user.id;
      next();
    });
  } catch (error) {
    return res.status(403).json(error);
  }
};

module.exports = {
  authMiddleware,
};
