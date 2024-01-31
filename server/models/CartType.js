const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
const { ProductType } = require('./path/to/ProductType'); 

const CartType = new GraphQLObjectType({
  name: 'Cart',
  fields: () => ({
    userId: { type: GraphQLID },
    products: { type: new GraphQLList(ProductType) }, 
    
  }),
});

module.exports = CartType;
