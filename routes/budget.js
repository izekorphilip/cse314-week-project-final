const express = require('express');
const router = express.Router();

const budgetController = require('../controllers/budget');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', budgetController.getAll);

router.get('/:id', budgetController.getSingle);

router.post('/', isAuthenticated, budgetController.createBudget);

router.put('/:id', isAuthenticated, budgetController.updateBudget);

router.delete('/:id', isAuthenticated, budgetController.deleteBudget);

module.exports = router;