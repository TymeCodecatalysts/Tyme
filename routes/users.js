var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "Bob The Builder"
  }, {
  	id: 2,
  	username: "Dora the Explorer"
  }, {
  	id: 3,
  	username: "Spongebob"
  }]);

});

module.exports = router;
