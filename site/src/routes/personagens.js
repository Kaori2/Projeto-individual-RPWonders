var express = require("express");
var router = express.Router();

var personagensController = require("../controllers/personagensController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/terminar", function (req, res) {
    personagensController.terminar(req, res);
})
router.get("/listarPersona", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    personagensController.listarPersona(req, res);
});
router.get("/listarPorUsuario", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    personagensController.listarPorUsuario(req, res);
});



module.exports = router;