const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobapp');

app.use(express.static('public'));

router.route('/jobs')
	.get((req, res)=>{
		res.send({
			message: "All the jobs"
		})
	})
	.post();


router.route('/')
	.get((req, res) => {
		res.send({
			message: "Hellow World"
		});
	});

app.use('/api', router);

app.listen(4321);
console.log('server listening on port 4321');
