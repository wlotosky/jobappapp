const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Job = require('./models/jobs.js');

mongoose.connect('mongodb://localhost/jobapp', {useMongoClinet: true});

app.use(express.static('public'));

router.route('/jobs')
	.get((req, res) => {
		Job.find({}, (err, docs) => {
			if(err !== null) {
				res
					.status(400)
					.send({
						error: err
					});
				return;
			}
			res
				.status(200)
				.send(docs)
		});
	})
	.post();

router.route('/')
	.get((req, res) => {
		res.send({
			message: "Hello World"
		});
	});

app.use('/api', router);

app.listen(4321);
console.log('server listening on port 4321');
