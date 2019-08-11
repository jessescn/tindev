const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

// Criando um servidor
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    connectedUsers[user] = socket.id;
})


// Adicionar conexao com o banco de dados
mongoose.connect("mongodb+srv://admin:admin@cluster0-othz4.mongodb.net/tindevbase?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

// middleware -> intercepta toda requisição para algum eventual tratamento
app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

// Permitir que coisas de fora possam requisitar
app.use(cors());

// Dizer para o express que vamos usar json
app.use(express.json());

// Adicionar uma configuração separada no server
app.use(routes);

//Ouvindo a porta 3333
server.listen(3800);

// M - Model, V - View, C - Controller