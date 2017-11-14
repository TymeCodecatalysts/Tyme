const express = require('express');
const router = express.Router();

//router.use('/user', require('./user'));
//router.use('/contacts', require('./contacts'));
router.use('/messages', require('./messages'));

module.exports = router;


// const cron = require('node-cron');
// /* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Tyme' });
});

// router.post('/', function(req, res) {
// 	delayMessage(req.body.phone,req.body.message);
// });

// function delayMessage(number, message) {
// 	const accountSid = 'AC65bdbdfbf0837bccd4962a2293745ceb';
// 	const authToken = '47d2cd5dc2994c6824db3ea677586b5d';
// 	const client = require('twilio')(accountSid, authToken);
// 	cron.schedule('5 * * * * *', function() {
// 		client.messages
// 		.create({
// 			to: number,
// 			from: '+12012926280',
// 			body: message,
// 		})
// 		.then((message) => console.log(message.sid));
// 	});
// }

module.exports = router;
