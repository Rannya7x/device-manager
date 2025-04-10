import express from 'express';
import devicesRouter from './src/routes/devicesRoutes.js';

const app = express();
app.use(express.json());
app.use('/devices', devicesRouter);

export default app;