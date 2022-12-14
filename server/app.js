const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const { User } = require("./models/user");
const cors = require("cors");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/my_rest_api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Connected to MongoDB...");
  } catch (ex) {
    console.log("Could not connect to MongoDB..." + ex);
  }
};

connect();
app.use(cors());

app.use(express.json());

app.use("/api/users", users);

app.use("/api/auth", auth);

app.use("/api/cards", cards);

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

app.get("/allusers", (req, res) => {
  const users = User.find({});
  console.log(users.length);
  res.send(users[0]);
});

const port = 3000;
http.listen(port, () => console.log(`Listening on port ${port}...`));
