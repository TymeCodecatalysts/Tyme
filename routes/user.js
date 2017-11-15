const express = require('express');
const models = require('../models')
const router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const user = models.User
const messages = models.Messages
const contacts = models.Contacts
const Sequelize = require('sequelize')
const Op = Sequelize.Op
// const { mustBeLoggedIn } = require('./utils')


passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  user.findById(id, function(err, user) {
    done(err, user)
  })
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    process.nextTick(function(){
      users.findOne({
        where: {email: email}
      })
        .then(user => {
          if (user) {
            return done(null, false, { message: 'this email is already taken' })
          } else {
            return users.create({
              email: email,
              password: password
            })
          }
        })
        .then(createdUser => {
          done(null, createdUser)
        })
        .catch(done);
    })
  }))

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    process.nextTick(function(){
      users.findOne({
        where: {email},
        attributes: {include: ['password_hashed']}
      })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'Login incorrect' })
          }
          return user.authenticate(password)
            .then(ok => {
              if (!ok) {
                return done(null, false, { message: 'Login incorrect' })
              }
              done(null, user)
            })
        })
        .catch(done)
    })
  }
))


router.post('/', (req, res) => {
  models.User.create({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  })
  .then((user) => {
    res.json(user);
  })
  .catch(() => {
    res.sendStatus(400);
  })
});


/* GET users listing. */
router.get('/', function(req, res) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  models.User.findAll() 
    .then((allUsers) => {
      res.json(allUsers);
    })

});

module.exports = router
