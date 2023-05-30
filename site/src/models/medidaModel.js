var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {
    instrucaoSql = `select qtdAcertos,
                        idQuiz
                    from pontos
                    where fkUser = ${idUsuario}
                    order by idQuiz desc limit ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function PersonaType() {
    instrucaoSql = `select 
    sum(oneliner) as oneliner,
    sum(semi) as semiliner,
    sum(lit) as lit
                        from tipo_rp_text`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function TypeText() {
    instrucaoSql = `select 
    sum(au) as AnU,
    sum(oc) as OrgC,
    sum(canon) as Can, 
    sum(ic_oc_blogger) as Blog
                        from tipo_persona`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {
    instrucaoSql = `select qtdAcertos,
        idQuiz
    from pontos
    where fkUser = ${idUsuario}
    order by idQuiz desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    PersonaType,
    TypeText
}