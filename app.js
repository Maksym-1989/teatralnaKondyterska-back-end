const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const api = require("./routes/api");
require("dotenv").config();

const app = express();

const { DB_HOST, PORT = 4000 } = process.env;
mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT);
  })
  .catch((e) => {
    console.log(`Error: ${e.message}`);
  });

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", api.auth);

mongoose.connection.on("connected", () => {
  console.log(`Database connection successful PORT=${PORT}`);
});

mongoose.connection.on("error", (error) => {
  console.log(`Error database connection ${error.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(`Database disconnected`);
});

process.on("SIGINT", async () => {
  mongoose.connection.close(() => {
    console.log("Connection to db terminated");
    process.exit(1);
  });
});

app.use((_, res) => {
  res.status(404).send({
    status: "error",
    code: 404,
    message: "Not found!",
  });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({
    status: "error",
    code: status,
    message,
  });
});
