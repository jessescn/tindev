const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

// Criando um servidor
const server = express();

// Adicionar conexao com o banco de dados
mongoose.connect("mongodb+srv://admin:admin@cluster0-othz4.mongodb.net/tindevbase?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

// Permitir que coisas de fora possam requisitar
server.use(cors());

// Dizer para o express que vamos usar json
server.use(express.json());

// Adicionar uma configuração separada no server
server.use(routes);

//Ouvindo a porta 3333
server.listen(3800);

// M - Model, V - View, C - Controller