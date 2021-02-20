# DebtApp

Este projeto tem como objetivo o gerenciamento de dívidas e devedores.

## Pré-requisitos

- Angular CLI versão 11.1.4
- Nodejs
- MongoDB
- Git
- Docker
- IDE de desenvolvimento (exemplo: VsCode)
- IDE de banco para consulta de dados (exemplo: Robo3T) 

## Setup

### Versionamento

Para ter acesso ao código fonte do projeto é necessário efetuar o clone dos repositórios pelos links abaixo:

**Repositório front-end:** https://github.com/anderchenko1993/debt-app
**Repositório back-end:** https://github.com/anderchenko1993/debt-api

### Dependências

O front-end foi desenvolvido utilizando o Angular, e o back-end Nodejs. Ambos utilizam bibliotecas de terceiros, e será necessário baixar as suas dependências através do comando `npm install`.

### Docker

O projeto faz uso do Docker para criar imagens prontas e serem utilizadas durante o desenvolvimento do produto.

Neste projeto a única imagem que será utilizada será o do mongo. Para baixar a imagem do mongo é necessário executar o comando `docker pull mongo`, e logo em seguida:

`docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=<username> -e MONGO_INITDB_ROOT_PASSWORD=<password> mongo`.

O nome da imagem criada se chama **mongodb**, e a porta que será utilizada para se conectar ao banco **27017**.

## Uso

### Front-end

Execute o comando `ng serve` para subir o servidor do Angular. Navegue para `http://localhost:4200/`. 

### Back-end

Execute o comando `npm run dev` para subir o servidor do Nodejs. A URL principal onde contém os endpoints será `http://localhost:3001/debt-api/`.