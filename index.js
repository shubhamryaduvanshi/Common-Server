const express = require("express");
const app = express();
const travelHubRoutes = require("./routes/travelHub");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Shubham's common server.");
});

app.use("/travelhub", travelHubRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
