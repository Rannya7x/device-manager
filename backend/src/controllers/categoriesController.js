import db from '../../db.js';

export async function listCategories(req, res) {
    try {
        const [categories] = await db.query('SELECT * FROM categories');
        console.log('Categories:', categories);
        res.status(200).json(categories);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Failed to get categories' });
    }
}