import routes from "./routes.jsn"
import cors from 'cors'
import express from 'express'

//iniciar o express
const app = express();

//defini as regras de servidor
// meio de comunicação é um json
app.use(express.json());

//definir como os dados serao interpretados
app.use(express.urlencoded({extended: true}));

//definir o cors - middleware para aplicações node.js com express
//que permite ou restringe requisições entre origens diferentes
//ou seja requisições cross-origin
app.use(cors());

//definir as rotas 
app.use(routes);

export default app;