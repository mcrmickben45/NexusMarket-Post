const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
const { ProductType } = require('./path/to/ProductType'); // Adjust the path as needed

const CartType = new GraphQLObjectType({
  name: 'Cart',
  fields: () => ({
    userId: { type: GraphQLID },
    products: { type: new GraphQLList(ProductType) }, // If it should be a list of product objects
    // Add more fields as needed
  }),
});

module.exports = CartType;
