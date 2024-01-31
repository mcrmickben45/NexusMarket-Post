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
   
  }),
});

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
   
  }),
});

const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    products: { type: new GraphQLList(GraphQLID) },
    total: { type: GraphQLFloat },
    
  }),
});

const CartType = new GraphQLObjectType({
  name: 'CartType',
  fields: () => ({
    userId: { type: GraphQLID },
    products: { type: new GraphQLList(GraphQLID) },
    
  }),
});

module.exports = { UserType, ProductType, OrderType, CartType };
