import express from 'express';
import cors from 'cors';
import devicesRouter from './routes/devicesRoutes.js';

const app = express();
const corsOptions = {
    origin: 'http://localhost:4200',
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/devices', devicesRouter);

export default app;