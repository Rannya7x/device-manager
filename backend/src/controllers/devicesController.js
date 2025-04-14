import { getAllDevices, createDevice } from '../models/devicesModel.js';

export async function listDevices(req, res) {
    try{
        const devices = await getAllDevices();
        res.status(200).json(devices);
    }catch (error){
        console.error('Database error:', error);
        res.status(500).json({ error: 'Failed to get devices' });
    }
}
export async function postDevice(req, res) {
    const { category_id, color, part_number } = req.body;

    if (category_id === undefined || color === undefined || part_number === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (typeof color !== 'string' || !/^[a-zA-Z]{1,16}$/.test(color)) {
        return res.status(400).json({ error: 'Invalid color format' });
    }

    if (typeof part_number !== 'number' || part_number <= 0) {
        return res.status(400).json({ error: 'Invalid part number format' });
    }

    try {
        const newDevice = await createDevice({ category_id, color, part_number });
        res.status(201).json(newDevice);       
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to create device' });        
    }
}