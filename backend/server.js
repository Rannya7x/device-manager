import express from 'express';
import devicesRouter from './routes/devices.js';

const app = express();

app.use(express.json());
app.use('/devices', devicesRouter);

export default app;
