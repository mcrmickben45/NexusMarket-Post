const { MongoClient, ServerApiVersion } = require('mongodb');

const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://mccormickben45:${password}@nexusmarketpost.rgrym05.mongodb.net/`;
const mongodbUriCollaborator1 = 'mongodb+srv://aqtagon:LUGcWvgVv1oZ1GdB@atlascluster.ciopdlq.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let chosenMongoDBUri;
if () {
    chosenMongoDBUri = mongodbUriCollaborator1;
} else if () {
    chosenMongoDBUri = mongodbUriCollaborator2;
} else {
    chosenMongoDBUri = mongodbUri; 
}

async function run() {
  try {
    
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
    await client.close();
  }
}
run().catch(console.dir);
module.exports = client;
