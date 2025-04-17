import { Router } from 'express';
import { listDevices, postDevice } from '../controllers/devicesController.js';
const devicesRouter = Router();

devicesRouter.get('/', listDevices);
devicesRouter.post('/', postDevice);

export default devicesRouter;