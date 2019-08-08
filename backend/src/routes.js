// Criando o endpoint: Recebendo o 'req' que possui todos os valores da requisição do usuário (parametros, dados)
// e a 'res' que é a resposta do servidor ao usuário
// req.query = possui os dados recebidos pelo pela url
// req.body = pelo jeito tb possui os dados

const express = require('express');
const DevController = require('./Controllers/DevController');
const LikeController = require('./Controllers/LikeController');
const DislikeController = require('./Controllers/DislikeController');

const routes = express.Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:devId/dislikes', DislikeController.store);
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes;