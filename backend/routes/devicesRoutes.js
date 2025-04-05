import { Router } from 'express';
const router = Router();

const devices = [
    { 
        id: 1, 
        name: "Device 1", 
        color: "red", 
        part_number: 12345,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(), 
    },
    {
        id: 2, 
        name: "Device 2", 
        color: "blue", 
        part_number: 67890,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(), 
    },
    {
        id: 3, 
        name: "Device 3", 
        color: "green", 
        part_number: 54321,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }
];

router.get('/', (req, res) => {
    res.status(200).json(devices);
});

export default router;