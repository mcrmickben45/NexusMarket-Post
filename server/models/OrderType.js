const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLFloat } = require('graphql');

const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    products: { type: new GraphQLList(ProductType) },
    total: { type: GraphQLFloat },
    
  }),
});

module.exports = OrderType;

