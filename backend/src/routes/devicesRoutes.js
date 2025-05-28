import { Router } from 'express';
import { listDevices, postDevice, deleteDeviceId } from '../controllers/devicesController.js';
const devicesRouter = Router();

devicesRouter.get('/', listDevices);
devicesRouter.post('/', postDevice);
devicesRouter.delete('/:id', deleteDeviceId);

export default devicesRouter;