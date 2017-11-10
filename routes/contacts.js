const express = require('express')
const models = require('../models')
const router = express.Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const contacts = models.Contacts
//const { mustBeLoggedIn } = require('./utils')

router.get('/', (req, res) => {
	contacts.findAll()
	.then(contacts => res.json(contacts))
	.catch(console.error)
})

router.post('/', (req,res, next) => {
	// mustBeLoggedIn(req, res, next)

})