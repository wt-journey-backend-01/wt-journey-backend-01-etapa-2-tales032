const express = require('express');
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get('', agentesController.getAllController);
router.get('/:id', agentesController.getAgentByIDController);
router.post('', agentesController.createAgentController);
router.put('/:id', agentesController.updateAgentController);
router.patch('/:id', agentesController.patchAgentController);
router.delete('/:id', agentesController.deleteAgentController);

module.exports = router;