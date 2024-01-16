const { app } = require("./app.js");
const Razorpay = require("razorpay");
const { connectDB } = require("./config/database.js");

connectDB();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

exports.instance = instance;

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);
