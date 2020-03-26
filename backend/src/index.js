const express = require('express');
//importação do cors
const cors = require('cors');
// importação de rotas
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);