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

// Read/Get/View jobs logic
const getJobs = async (req, res) => {
	try {
		const jobs = await Job.find({});
		res.status(200).json(jobs);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
// Read a particular job(by id) logic
const getJob = async (req, res) => {
	try {
		const { id } = req.params;
		const job = await Job.findById(id);
		res.status(200).json(job);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Update/edit a job logic
const updateJob = async (req, res) => {
	try {
		const { id } = req.params;
		const job = await Job.findByIdAndUpdate(id, req.body);
		if (!job) {
			return res.status(404).json({ message: "Job not found!" });
		}
		const updatedJob = await Job.findById(id);
		res.status(200).json(updatedJob);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Delete a job logic
const deleteJob = async (req, res) => {
	try {
		const { id } = req.params;
		const job = await Job.findByIdAndDelete(id);
		if (!job) {
			return res.status(404).json({ message: "Job not found" });
		}
		res.status(200).json({ message: "Job deleted successfully!" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	createJob,
	getJobs,
	getJob,
	updateJob,
	deleteJob,
};
