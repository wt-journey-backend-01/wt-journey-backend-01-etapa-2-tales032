const casosRepository = require("../repositories/casosRepository")
const validations = require("../utils/errorHandler")

function checkExist(id, res){
    const caso = casosRepository.getCaseByID(id);
    if (!caso) {
        return res.status(404).json({
            message: "Caso não cadastrado no banco de dados!"
        });
    }s
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
        validations.validationsCase(data, res);

        const newCase = casosRepository.createCase(data);
        res.status(201).json(newCase);
}

function updateCaseController(req,res){
        const { id } = req.params;
        const data = req.body;
        checkExist(id);
        validations.validationsCase(data, res);
  

        const updatedCaseController = casosRepository.updateCase(id, data);
        res.status(200).json(updatedCaseController);
}

function patchCaseController(req,res){
        const { id } = req.params;
        const data = req.body;
        checkExist(id);
        validations.validationsCase(data, res);
        
 
        const patchedCaseController = casosRepository.patchCase(id, data);
        res.status(200).json(patchedCaseController);
}

function deleteCaseController(req,res){
        const { id } = req.params;
        checkExist(id);

        const deletedCase = casosRepository.deleteCase(id);
        res.status(200).json(deletedCase);
        
}

module.exports = {
   getCasosController,
   getCaseByIDController,
   createCaseController,
   updateCaseController,
   deleteCaseController,
   patchCaseController
   
}