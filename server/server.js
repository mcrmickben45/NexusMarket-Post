const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const schema = require('./schema');
const User = require('./models/User'); // Import the User model

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  // Hash the password before saving it to the database
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
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

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
