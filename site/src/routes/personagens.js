var express = require("express");
var router = express.Router();

var personagensController = require("../controllers/personagensController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/responder", function (req, res) {
    personagensController.responder(req, res);
})
router.post("/send_type", function (req, res) {
    personagensController.send_type(req, res);
})
router.post("/send_cara", function (req, res) {
    personagensController.send_cara(req, res);
})
router.post("/rate", function (req, res) {
    personagensController.rate(req, res);
})
router.get("/pontos/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    personagensController.pontos(req, res);
});
router.get("/rateme/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    personagensController.rateme(req, res);
});
router.get("/done/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    personagensController.done(req, res);
});
router.get("/listarPorUsuario", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    personagensController.listarPorUsuario(req, res);
});



module.exports = router;