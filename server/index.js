const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const createCheckoutSession = require("./api/checkout");
const paymentIntent = require("./api/paymentintent");
const webhook = require("./api/webhook");
const decodeJWT = require("./auth/decode");

const app = express();
const port = 8080;

app.use(
  express.json({
    verify: (req, res, buffer) => (req["rawBody"] = buffer),
  })
);
app.use(cors({ origin: true }));

app.use(decodeJWT);

app.get("/", (req, res) => res.send("Hello World"));

app.post("/create-checkout-session", createCheckoutSession);

app.post("/create-payment-intent", paymentIntent);

app.post("/webhook", webhook);

app.listen(port, () => console.log("listening on port", port));
