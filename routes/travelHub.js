const routes = require("express").Router();
const axios = require("axios");

routes.get("/", (req, res) => {
  res.send("Welcome to the Travel Hub.");
});

routes.get("/pnrStatus", async (req, res) => {
  console.log("Request received", req);
  try {
    const response = await axios.get(
      //   "https://pnr-status-indian-railway.p.rapidapi.com/rail/" +
      //     req.body.PNR_Number,
      "https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/8531575878",
      {
        headers: {
          "x-rapidapi-host": process.env.TRAVELHUB_RAPID_API_HOST,
          "x-rapidapi-key": process.env.TRAVELHUB_RAPID_API_KEY,
        },
      }
    );
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = routes;
