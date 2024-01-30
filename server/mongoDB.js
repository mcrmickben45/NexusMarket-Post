const { MongoClient, ServerApiVersion } = require('mongodb');
// Replace <password> with your actual password
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://mccormickben45:${password}@nexusmarketpost.rgrym05.mongodb.net/`;
const mongodbUriCollaborator1 = 'mongodb+srv://aqtagon:LUGcWvgVv1oZ1GdB@atlascluster.ciopdlq.mongodb.net/?retryWrites=true&w=majority';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// Choose the MongoDB URI based on some condition or configuration
let chosenMongoDBUri;
if (/* some condition */) {
    chosenMongoDBUri = mongodbUriCollaborator1;
} else if (/* some other condition */) {
    chosenMongoDBUri = mongodbUriCollaborator2;
} else {
    chosenMongoDBUri = mongodbUri; // Use the default URI
}
// Use chosenMongoDBUri in your MongoDB connection logic
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
module.exports = client;
