const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
	jobTitle: String,
	company: String,
	url: String,
	datePosted: String,
	dateApplied: String,
	contactName: String,
	contactTitle: String,
	contactEmail: String
})