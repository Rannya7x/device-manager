import { Router } from 'express';
import { listDevices, postDevice } from '../controllers/devicesController.js';
const router = Router();

router.get('/', listDevices);
router.post('/', postDevice);

export default router;