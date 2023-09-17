var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.post("/level/:idUsuario", function (req, res) {
    usuarioController.level(req, res);
});
router.get("/nivelamento/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    usuarioController.nivelamento(req, res);
});
// router.get("/findingLev/:idUsuario", function (req, res) {
//     // função a ser chamada quando acessar /carros/listar
//     usuarioController.findingLev(req, res);
// });
module.exports = router;