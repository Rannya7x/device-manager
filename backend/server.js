import express from 'express';
import devicesRouter from './routes/devicesRoutes.js';

const app = express();

app.use(express.json());
app.use('/devices', devicesRouter);

export default app;
