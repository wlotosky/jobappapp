const express = require('express');
const app = express();
const router = express.Router();

router.route('/')
	.get((req, res) => {
		res.send({
			message: "Hellow World"
		});
	});

app.use('/api', router);

app.listen(4321);
console.log('server listening on port 4321');
