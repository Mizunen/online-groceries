const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productsRoutes = require("./routes/products-routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Sets it to allow all domains
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); //Sets allowed headers
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use(bodyParser.json());

app.use("/api/products", productsRoutes);

app.listen("5000");
