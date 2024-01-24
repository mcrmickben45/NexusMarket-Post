const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const { UserType, ProductType, OrderType } = require('./models'); // Import your MongoDB models

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Define future queries here
    // Example:
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
    // Define mutations here
    // example:
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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return User.findById(args.id);
        },
      },
      products: {
        type: new GraphQLList(ProductType),
        resolve() {
          return Product.find();
        },
      },
      // Add more queries as needed
    },
  });
  
  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addUser: {
        type: UserType,
        args: { name: { type: GraphQLString }, email: { type: GraphQLString }, password: { type: GraphQLString } },
        resolve(parent, args) {
          // Logic to add a new user
          return User.create(args);
        },
      },
      addProduct: {
        type: ProductType,
        args: { name: { type: GraphQLString }, description: { type: GraphQLString }, price: { type: GraphQLFloat } },
        resolve(parent, args) {
          // Logic to add a new product
          return Product.create(args);
        },
      },
      // Add more mutations as needed
    },
  });

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      // ... (previous queries)
      cart: {
        type: CartType,
        args: { userId: { type: GraphQLID } },
        resolve(parent, args) {
          // Logic to retrieve a user's shopping cart
          return Cart.findOne({ userId: args.userId });
        },
      },
      // Add more queries as needed
    },
  });
  
  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // ... (previous mutations)
      addToCart: {
        type: CartType,
        args: { userId: { type: GraphQLID }, productId: { type: GraphQLID } },
        resolve(parent, args) {
          // Logic to add a product to the user's shopping cart
          return Cart.findOneAndUpdate(
            { userId: args.userId },
            { $addToSet: { products: args.productId } },
            { upsert: true, new: true }
          );
        },
      },
      // Add more mutations as needed
    },
  });

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // ... (previous mutations)
      checkout: {
        type: OrderType,
        args: { userId: { type: GraphQLID } },
        resolve(parent, args) {
          // Logic to process the checkout and create an order
          return Order.create({ userId: args.userId, products: [], total: 0 });
        },
      },
      // Add more mutations as needed
    },
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
  });
  
  
  