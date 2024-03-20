const rootRouter = require("./routes/index.js");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// 1) MIDDLEWARES

app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/api/v1", rootRouter);

module.exports = app;
