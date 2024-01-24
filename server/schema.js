const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const { UserType, ProductType, OrderType } = require('./models'); // Import your MongoDB models

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Define your queries here
    // For example:
    // user: {
    //   type: UserType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     // Logic to retrieve a user by ID
    //   },
    // },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Define your mutations here
    // For example:
    // addUser: {
    //   type: UserType,
    //   args: { name: { type: GraphQLString }, email: { type: GraphQLString } },
    //   resolve(parent, args) {
    //     // Logic to add a new user
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
