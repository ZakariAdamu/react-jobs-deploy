const express = require("express");
const Job = require("../models/job.model");
const router = express.Router();
const { getJobs, createJob } = require("../controllers/job.controller");

// API specific endpoints for all the CRUD practices

// post a job
router.post("/", createJob);

// read all jobs
router.get("/", getJobs);

// read 1 job by it's id
// router.get("/:id", getJob);

// // update a job
// router.put("/:id", updateJob);

// // delete a job
// router.delete("/:id", deleteJob);

module.exports = router;
