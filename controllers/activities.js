const express = require('express');
const router = express.Router();
const Activity = require('../models/activity');

router.get('/', (req, res, next) => {
	Activity.find()
	  .then(activities => res.json(activities))
	  .catch(next)
  })
  
  // SHOW
  // GET /activities/:id
  router.get('/:id', (req, res, next) => {
	const id = req.params.id
	Activity.findById(id)
	  .then(activity => res.json(activity))
	  .catch(next)
  })
  
  // CREATE
  // POST /activities/
  router.post('/', (req, res, next) => {
	const activityData = req.body
	Activity.create(activityData)
	  .then(activity => res.status(201).json(activity))
	  .catch(next)
  })
  
  // UPDATE
  // PATCH /activities/:id
  router.patch('/:id', (req, res, next) => {
	const id = req.params.id
	const activityData = req.body
	Activity.findOneAndUpdate({_id: id }, activityData, {new: true})
	  .then(activity => res.json(activity))
	  .catch(next)
  })
  
  // DESTROY
  // DELETE /activities/:id
  router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	Activity.findOneAndDelete({_id: id})
	  .then(() => res.sendStatus(204))
	  .catch(next)
  })
  
  module.exports = router