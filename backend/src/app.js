import express from 'express';
import cors from 'cors';
import devicesRouter from './routes/devicesRoutes.js';
import categoriesRouter from './routes/categoriesRoutes.js';

const app = express();
const corsOptions = {
    origin: 'http://localhost:4200',
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/devices', devicesRouter);
app.use('/categories', categoriesRouter);

export default app;