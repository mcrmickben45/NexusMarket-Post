const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLFloat } = require('graphql');

const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    products: { type: GraphQLList(GraphQLID) },
    total: { type: GraphQLFloat },
    // Add more fields as needed
  }),
});

module.exports = OrderType;
