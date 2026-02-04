const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin_john:zG1h99BUR2eouyMW@karuvattu-kadai.rwfvnvi.mongodb.net/?appName=karuvattu-kadai";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    console.log("Starting connection test...");
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("✅ Pinged your deployment. You successfully connected to MongoDB!");

        // Check access to our specific database
        const db = client.db("karuvattu_kadai");
        console.log("✅ Successfully accessed 'karuvattu_kadai' database.");

    } catch (error) {
        console.error("❌ Connection failed:");
        console.error(error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("Connection closed.");
    }
}
run().catch(console.dir);
