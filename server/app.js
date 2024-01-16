const express = require("express")
const cors = require("cors")
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;


const paymentRoute = require("./routes/paymentRoutes")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) => {

    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
}
);

module.exports = { app };
