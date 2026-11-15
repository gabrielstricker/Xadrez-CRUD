import express from 'express'
import cors from 'cors'
import { jogadorRoutes } from './routes/jogador.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/jogadores',jogadorRoutes);

export {app};