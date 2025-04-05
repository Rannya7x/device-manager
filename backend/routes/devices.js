import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json("get devices");
});

export default router;