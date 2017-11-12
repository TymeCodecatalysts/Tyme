const express = require('express')
const models = require('../models')
const router = express.Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const messages = models.Messages
const user = models.user
const contacts = models.Contacts
// const { mustBeLoggedIn } = require('./utils')

router.get('/', (req,res) => {
	messages.findAll()
	.then(messages => res.json(messages))
	.catch(console.error)
})

module.exports = router