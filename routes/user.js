const express = require('express');
const models = require('../models')
const router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const user = models.User
//const { mustBeLoggedIn } = require('./utils')


// passport.serializeUser(function(user, done) {
//   done(null, user.id)
// })

// passport.deserializeUser(function(id, done) {
//   user.findById(id, function(err, user) {
//     done(err, user)
//   })
// })



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

module.exports = router
