const express = require("express");
const mongoose = require("mongoose");

const jobRoute = require("./routes/job.route");
const app = express();

app.use(express.json());

// middleware configuration to allow for entering data in other formats (eg. form encoded format) aside the JSON format

app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/jobs", jobRoute);

app.listen(5001, () => {
	console.log("Server is running on port 5001 and thankszz!!!");
});

// Get backend api homepage (initial url testing)
app.get("/", (req, res) => {
	res.send(
		"Hello from Node BACKEND API, Jobs-welcome!!! AlhamdulilLah..... Jummuah Mubaraq!x2"
	);
});

mongoose
	.connect(
		"mongodb+srv://zakariadamu714:pc3bQHH0okMD0a4j@cluster0.yxnuqu4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	)
	.then(() => {
		console.log("Connected to Database!!");
	})
	.catch(() => console.log("Connection failed!"));
