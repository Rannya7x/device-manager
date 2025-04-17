import { Router } from 'express';
import { listCategories } from '../controllers/categoriesController.js';

const categoriesRouter = Router();

categoriesRouter.get('/', listCategories);

export default categoriesRouter;