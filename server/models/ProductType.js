const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = require('graphql');

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    // Add more fields as needed
  }),
});

module.exports = ProductType;
