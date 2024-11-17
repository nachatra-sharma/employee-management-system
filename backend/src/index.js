const express = require("express");
const app = express();
const { PORT, DB_URL } = require("./config/server-config");
const connectToDB = require("./db/db");
const apiRouter = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
// const User = require("./models/User");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api", apiRouter);

app.listen(PORT, async () => {
  console.log(`Server is up and running on port ${PORT}`);
  await connectToDB(DB_URL);
  // const user = await User.create({
  //   email: "elon@gmail.com",
  //   password: "Elon@123",
  // });
  // user.save();

  console.log("successfully connected to db");
});
