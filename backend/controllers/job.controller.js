const Job = require("../models/job.model");

// all CRUD logic for my job-listing API here
// Create a job-listing logic
const createJob = async (req, res) => {
	try {
		const job = await Job.create(req.body);
		res.status(200).json(job);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Read products logic
const getJobs = async (req, res) => {
	try {
		const jobs = await Job.find({});
		res.status(200).json(jobs);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	createJob,
	getJobs,
};
