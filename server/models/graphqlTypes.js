const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLFloat
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    // ... other user fields
  }),
});

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    // ... other product fields
  }),
});

const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    products: { type: new GraphQLList(GraphQLID) },
    total: { type: GraphQLFloat },
    // ... other order fields
  }),
});

const CartType = new GraphQLObjectType({
  name: 'CartType',
  fields: () => ({
    userId: { type: GraphQLID },
    products: { type: new GraphQLList(GraphQLID) },
    // ... other cart fields
  }),
});

module.exports = { UserType, ProductType, OrderType, CartType };
