var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.get("/persona", function (req, res) {
    medidaController.PersonaType(req, res);
})
router.get("/persona_catch", function (req, res) {
    medidaController.TypeText(req, res);
})

module.exports = router;