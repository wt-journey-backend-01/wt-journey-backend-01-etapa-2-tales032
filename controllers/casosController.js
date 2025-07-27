const casosRepository = require("../repositories/casosRepository")
const validations = require("../utils/errorHandler")

function checkExist(id, res) {
    const caso = casosRepository.getCaseByID(id);
    if (!caso) {
        res.status(404).json({ message: "Caso não cadastrado no banco de dados!" });
        return null;
    }
    return caso; 
}


function getCasosController(req, res) {
        const casos = casosRepository.getAll()
        res.json(casos)
}

function getCaseByIDController(req, res) {
        const { id } = req.params;
        const caso = checkExist(id, res);
        if (!caso) return; 
        res.status(200).json(caso);
}

function createCaseController(req,res){
        const data = req.body;
        const isValid =  validations.validationsCase(data, res);
        if (!isValid) {
        return; 
        }

        const newCase = casosRepository.createCase(data);
        res.status(201).json(newCase);
}

function updateCaseController(req,res){
        const { id } = req.params;
        const data = req.body;
        const caso = checkExist(id, res);
        if (!caso) return; 
        const isValid =  validations.validationsCase(data, res);
        if (!isValid) {
        return; 
        }

        const updatedCaseController = casosRepository.updateCase(id, data);
        res.status(200).json(updatedCaseController);
}

function patchCaseController(req,res){
        const { id } = req.params;
        const data = req.body;
        const caso = checkExist(id, res);
        if (!caso) return; 
        const isValid =  validations.validationsCase(data, res);
        if (!isValid) {
        return; 
        }
        
 
        const patchedCaseController = casosRepository.patchCase(id, data);
        res.status(200).json(patchedCaseController);
}

function deleteCaseController(req,res){
        const { id } = req.params;
        const caso = checkExist(id, res);
        if (!caso) return; 

        casosRepository.deleteCase(id);
        res.status(204).json(id);
        
}

module.exports = {
   getCasosController,
   getCaseByIDController,
   createCaseController,
   updateCaseController,
   deleteCaseController,
   patchCaseController
   
}