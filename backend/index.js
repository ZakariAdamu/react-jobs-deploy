const express = require("express");
// const mongoose = require("mongoose");
// const Product = require("./models/product.model");
// const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());

// middleware configuration to allow for entering data in other formats (eg. form encoded format) aside the JSON format

app.use(express.urlencoded({ extended: false }));

// routes
// app.use("/api/products", productRoute);

app.listen(5001, () => {
	console.log("Server is running on port 5001 and thankszz!!!");
});

// Get backend api homepage (initial url testing)
app.get("/", (req, res) => {
	res.send("Hello from Node BACKEND API, Jobs-welcome!!! AlhamdulilLah");
});
