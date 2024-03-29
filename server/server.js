const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const schema = require('./schema');
const User = require('./models/User');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://mccormickben45:LUGcWvgVv1oZ1GdB@nexusmarketpost.rgrym05.mongodb.net/', {
  });


app.use(express.json());


const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1.',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2.',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
  },
  
];

// Middleware for JWT authentication
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
};

// API endpoint for fetching products, protected by JWT authentication
app.get('/api/products', authenticateJWT, (req, res) => {
  res.json(products);
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/graphql', authenticateJWT, graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const { MongoClient, ServerApiVersion } = require('mongodb');


const password = process.env.MONGO_PASSWORD; 
const uri = `mongodb+srv://mccormickben45:${password}@nexusmarketpost.rgrym05.mongodb.net/`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
