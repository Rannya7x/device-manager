import db from '../../db.js';

export async function getAllDevices() {
    const [devices] = await db.query('SELECT * FROM devices');
    return devices;
}

export async function createDevice(device) {
    const { category_id, color, part_number } = device;

    const [result] = await db.query('INSERT INTO devices (category_id, color, part_number) VALUES (?, ?, ?)', [category_id, color, part_number]);
    
    const newDevice = {
        id: result.insertId,
        ...device,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    };
    return newDevice;
}

export async function deleteDevice(id) {
    const [result] = await db.query('DELETE FROM devices where id = ?', [id]);

    return { 
        affectedRows: result.affectedRows,
        deletedId: id 
    };
}