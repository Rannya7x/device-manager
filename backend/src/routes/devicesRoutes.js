import { Router } from 'express';
import listDevices from '../controllers/devicesController.js';
const router = Router();

router.get('/', listDevices);

export default router;