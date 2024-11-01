const express = require('express');
const router = express.Router();

const studiesController = require('../controllers/studies');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', studiesController.getAllStudies);

router.get('/:id', studiesController.getSingleStudies);

router.post('/', isAuthenticated, studiesController.createStudies);

router.put('/:id', isAuthenticated, studiesController.updateStudies);

router.delete('/:id', isAuthenticated, studiesController.deleteStudies);

module.exports = router;