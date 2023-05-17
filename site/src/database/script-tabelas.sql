-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
CREATE DATABASE projeto;

USE projeto;

CREATE TABLE satisfacao (
idSatisfacao int primary key auto_increment,
avalicao varchar (45), 
constraint chkAvalicao check (avalicao in('Nâo gostei', 'Gostei', 'Gostei Muito', 'Mais ou menos' ))
);

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome varchar(100) not null,
email varchar(100) not null, 
senha varchar (100) not null,
nivel int,
fkSatisfacao int,
constraint fkSatisfacao foreign key (fkSatisfacao)
references satisfacao(idSatisfacao)
);

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY auto_increment,
nome varchar(100),
email varchar(100), 
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario)
references usuario(idUsuario)
);


CREATE TABLE pergunta(
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
Nivel varchar (45)
);

create table user_pergunta ( 
fkUser int,  
constraint fkUser foreign key (fkUser)
references usuario(idUsuario),
fkPergunta int,  
constraint fkPergunta foreign key (fkPergunta)
references pergunta(idPergunta),
constraint pkComposta primary key ( fkUser, fkPergunta)
);


/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
