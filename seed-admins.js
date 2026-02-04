const { MongoClient } = require('mongodb');

async function seed() {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/karuvattu_kadai';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('karuvattu_kadai');
        const adminsCollection = db.collection('admins');

        const emails = ['johnkaruvattukadai@gmail.com', 'odinfotech2024@gmail.com'];

        for (const email of emails) {
            await adminsCollection.updateOne(
                { email },
                { $set: { email, role: email === emails[0] ? 'SUPER_ADMIN' : 'ADMIN' } },
                { upsert: true }
            );
            console.log(`Admin ${email} seeded/updated.`);
        }

        console.log('Seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding admins:', error);
    } finally {
        await client.close();
    }
}

seed();
