require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const coursesRouter = require("./routes/courses");
const mediaRouter = require("./routes/media");
const ordersRouter = require("./routes/orders");
const paymentsRouter = require("./routes/payments");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/courses", coursesRouter);
app.use("/media", mediaRouter);
app.use("/orders", ordersRouter);
app.use("/payments", paymentsRouter);

module.exports = app;
