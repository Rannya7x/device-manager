import { getAllDevices } from '../models/devicesModel.js';

export default async function listDevices(req, res) {
    try{
        const devices = await getAllDevices();
        res.status(200).json(devices);
    }catch (error){
        console.error('Database error:', error);
        res.status(500).json({ error: 'Failed to get devices' });
    }
}