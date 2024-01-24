const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');

const CartType = new GraphQLObjectType({
  name: 'Cart',
  fields: () => ({
    userId: { type: GraphQLID },
    products: { type: GraphQLList(GraphQLID) },
    // Add more fields as needed
  }),
});

module.exports = CartType;
