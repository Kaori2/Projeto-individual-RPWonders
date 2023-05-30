var personagensModel = require("../models/personagensModel");

// function pontos(req, res) {
//     var acertos = req.body.acertosServer;
//     var idUsuario = req.body.idUser;
//     personagensModel.pontos().then(function(resultado){
//         // precisamos informar que o resultado voltará para o front-end como uma resposta em json
//         res.status(200).json(resultado);
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

function pontos(req, res) {
    var idUsuario = req.params.idUsuario;
    personagensModel.pontos(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function responder(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var idUsuario = req.body.idUser;

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seu pontos está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        personagensModel.responder(acertos, idUsuario )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function send_type(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var oneliner = req.body.oneServer;
    var semilit = req.body.semiServer;
    var lit = req.body.litServer;
    var idUsuario = req.body.idUser;

    // Faça as validações dos valores
    if (oneliner == undefined) {
        res.status(400).send("Seu oneliner está undefined!");
    } else if (semilit == undefined) {
        res.status(400).send("Seu semilit está indefinido!");
    } else if (lit == undefined) {
        res.status(400).send("Seu lit está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        personagensModel.send_type(oneliner, semilit, lit , idUsuario )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function rate(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var rating = req.body.ratingServer;
    var idUsuario = req.body.idUser;

    // Faça as validações dos valores
    if (rating == undefined) {
        res.status(400).send("Seu rating está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        personagensModel.rate(rating, idUsuario )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function send_cara(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var oc = req.body.ocServer;
    var canon = req.body.canonServer;
    var au = req.body.auServer;
    var blogger = req.body.bloggerServer;
    var idUsuario = req.body.idUser;

    // Faça as validações dos valores
    if (oc == undefined) {
        res.status(400).send("Seu oc está undefined!");
    } else if (canon == undefined) {
        res.status(400).send("Seu canon está indefinido!");
    } else if (au == undefined) {
        res.status(400).send("Seu au está indefinido!");   
    } else if (blogger == undefined) {
        res.status(400).send("Seu blogger está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        personagensModel.send_cara(oc, canon, au, blogger, idUsuario )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    personagensModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = {
    send_cara,
    responder,
    rate,
    send_type,
    pontos,
    listarPorUsuario
}