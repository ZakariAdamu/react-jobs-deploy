const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please enter job title"],
		},
		type: {
			type: String,
			required: true,
			default: "Full - Time",
		},
		location: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		salary: {
			type: String,
			required: true,
			default: "Under $50K",
		},
		company: {
			name: {
				type: String,
				required: [true, "Please enter company name"],
			},
			description: {
				type: String,
				required: true,
			},
			contactEmail: {
				type: String,
				required: true,
			},
			contactPhone: {
				type: String,
				required: true,
			},
		},
	},
	{
		timestamps: true,
	}
);

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
