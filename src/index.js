const express = require("express");
const dotenv = require("dotenv");
const routeAuth = require("./Routes/authRoute");

//init
dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/auth", routeAuth);

app.get("/", (req, res) => {
  res.send("WELCOME TO API 4Gamers hiyahiyahiya");
});

app.listen(PORT, () => {
  console.log("4Gamers is Running.. on :", PORT);
});
