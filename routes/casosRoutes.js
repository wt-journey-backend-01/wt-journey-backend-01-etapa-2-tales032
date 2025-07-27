const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get('', casosController.getCasosController);
router.get('/:id', casosController.getCaseByIDController);
router.post('', casosController.createCaseController);
router.put('/:id', casosController.updateCaseController);
router.patch('/:id', casosController.patchCaseController);
router.delete('/:id', casosController.deleteCaseController);

module.exports = router;