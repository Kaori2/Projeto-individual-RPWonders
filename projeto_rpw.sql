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
fkSatisfacao int,
constraint fkSatisfacao foreign key (fkSatisfacao)
references satisfacao(idSatisfacao)
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


select * from usuario;
select * from satisfacao;
select * from pergunta; 
select * from user_pergunta; 

select * from satisfacao join usuario on satisfacao.idSatisfacao = usuario.fkSatisfacao;
select * from user_pergunta join usuario on usuario.idUsuario = user_pergunta.fkUser
                          join pergunta on pergunta.idPergunta = user_pergunta.fkPergunta;