import express from 'express';
import cors from 'cors';
import router from './routes'

const server = express();
server.use(cors());
server.use(express.json());

server.use(router);

const PORT = 2021;

server.listen(PORT,()=>{console.log(`survey's Server is listening on ${PORT} `)});

export default server;