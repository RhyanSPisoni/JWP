const express = require('express');
const router = express.Router();

const consultaController = require('../controller/consulta-controller.js');
/** 
 * Rotas HTTP
*/
//Mostrar todas as máquinas virtuais
router.get('/', consultaController.get);

module.exports = router;