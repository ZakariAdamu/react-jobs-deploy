const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jobRoute = require("./routes/job.route");
const app = express();

app.use(
	cors({
		origin: ["https://react-jobs-deploy-client.vercel.app"],
		methods: ["POST", "GET"],
		credentials: true,
	})
);

app.use(express.json());

mongoose
	.connect(
		"mongodb+srv://zakariadamu714:pc3bQHH0okMD0a4j@cluster0.yxnuqu4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
	)
	.then(() => {
		console.log("Connected to Database!!");
	})
	.catch(() => console.log("Connection failed!"));

// middleware configuration to allow for entering data in other formats (eg. form encoded format) aside the JSON format
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/jobs", jobRoute);

// Get backend api homepage (initial url testing)

app.get("/", (req, res) => {
	res.send("Hello from Node Backend API, AlhamdulilLah");
});

// mongoose
// 	.connect(process.env.MONGODB_URL)
// 	.then(() => {
// 		console.log("Connected to Database!!");
// 	})
// 	.catch(() => console.log("Connection failed!"));

// ====== Second trial setup ========

app.listen(5002, () => {
	console.log("Server is running at http://localhost:5002 Enjoy coding!");
});
