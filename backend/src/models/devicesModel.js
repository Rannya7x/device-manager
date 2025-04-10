import db from '../../db.js';

export async function getAllDevices() {
    const [devices] = await db.query('SELECT * FROM devices');
    console.log('Devices:', devices);
    return devices;
}