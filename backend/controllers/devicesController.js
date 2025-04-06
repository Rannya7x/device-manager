import db from '../db.js';

export default async function listDevices(req, res) {
    try{
        const [devices] = await db.query('SELECT * FROM devices');
        res.status(200).json(devices);
        console.log('Devices retrieved successfully:', devices);
    }catch (error){
        console.error('Database error:', error);
        res.status(500).json({ error: 'Failed to get devices' });
    }
}