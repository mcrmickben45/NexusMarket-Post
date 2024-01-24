const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/graphql', graphqlHTTP({
  // GraphQL schema and root resolver go here
  // ...
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
