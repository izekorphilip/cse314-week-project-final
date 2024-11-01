const express = require('express');
const router = express.Router();

const jobController = require('../controllers/job');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', jobController.getAllJob);

router.get('/:id', jobController.getSingleJob);

router.post('/', isAuthenticated, jobController.createJob);

router.put('/:id', isAuthenticated, jobController.updateJob);

router.delete('/:id', isAuthenticated, jobController.deleteJob);

module.exports = router;