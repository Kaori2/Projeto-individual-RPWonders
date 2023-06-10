CREATE DATABASE projeto;
drop database projeto;
USE projeto;

CREATE TABLE satisfacao (
idSatisfacao int primary key auto_increment,
avalicao varchar (45), 
constraint chkAvalicao check (avalicao in('Nâo gostei', 'Gostei', 'Gostei Muito', 'Mais ou menos' )),
fkSatisfacao int,
constraint fkSatisfacao foreign key (fkSatisfacao)
references usuario(idUsuario)
);

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome varchar(45) not null,
email varchar(100) not null, 
senha varchar (100) not null,
nivel int
);

-- create table quantas_vezes_logou (
-- idNum int auto_increment,
-- dtLogin datetime default current_timestamp, 
-- fkUsuario int, 
-- constraint fkUsuario foreign key (fkUsuario)
-- references usuario(idUsuario),
-- constraint pkLogin primary key (idNum, fkUsuario)
-- );
-- select * from quantas_vezes_logou;

CREATE TABLE personagem (
idPersonagem INT auto_increment,
nomePersona varchar(45),
descPersona varchar(15000), 
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario)
references usuario(idUsuario),
constraint pkPersonagem primary key (idPersonagem, fkUsuario)
);


/*CREATE TABLE questionario(
idQuestionario INT PRIMARY KEY AUTO_INCREMENT,
questao varchar (100)
 );

CREATE TABLE tentativa(
idTentativa INT PRIMARY KEY AUTO_INCREMENT,
dtTentativa datetime default current_timestamp,
fkUser int,
constraint fkUser foreign key (fkUser)
references usuario(idUsuario)
 );*/
 
 create table pontos( 
idQuiz int auto_increment,
qtdAcertos int,  
fkUser int,
constraint fkUser foreign key (fkUser)
references usuario(idUsuario),
constraint pkComposta primary key (idQuiz, fkUser)
/*fkTentativa int,
constraint fkTentativa foreign key (fkTentativa)
references tentativa(idTentativa),
constraint pkComposta primary key (idQuiz, fkPerguntas, fkTentativa)*/
);


create table tipo_rp_text( 
idTipo_rp_text int AUTO_INCREMENT,
fkUsers int,  
oneliner int, 
semi int, 
lit int,
constraint fkUsers foreign key (fkUsers)
references usuario(idUsuario),
constraint pkUser primary key (idTipo_rp_text, fkUsers)
);

create table tipo_persona( 
idTipo_persona int AUTO_INCREMENT,
fkAdmin int,  
au int, 
oc int, 
ic_oc_blogger int,
canon int, 
constraint fkAdmin foreign key (fkAdmin)
references usuario(idUsuario),
constraint pkUser primary key (idTipo_persona, fkAdmin)
);



use projeto;
select oneliner,
semi, 
lit
from tipo_rp_text;
select 
    max(oneliner),
    max(semi),
    max(lit)
                        from tipo_rp_text;
select * from usuario;
desc usuario;
select * from satisfacao;
select * from personagem;
select * from tipo_rp_text;
select * from personagem where fkUsuario = 2;
UPDATE personagem SET descPersona = 'teste', nomePersona = 'teste' WHERE idPersonagem = 1;

select nomePersona, descPersona FROM personagem where fkUsuario = 3;
select avalicao from satisfacao where fkSatisfacao = 7; 
select count(avalicao) from satisfacao where fkSatisfacao  = 7; 
select * from tipo_persona; 
select * from pontos; 
select * from personagem where fkUsuario = 2;

select * from satisfacao join usuario on satisfacao.idSatisfacao = usuario.fkSatisfacao;
select * from user_pergunta join usuario on usuario.idUsuario = user_pergunta.fkUser
                          join pergunta on pergunta.idPergunta = user_pergunta.fkPergunta;
                          select * from personagem;
