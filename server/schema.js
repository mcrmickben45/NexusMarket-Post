const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLList } = require('graphql');
const { UserType, ProductType, OrderType, CartType } = require('./models/graphqlTypes');


const User = require('./models/User');
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Order = require('./models/Order');

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
      type: GraphQLList(ProductType),
      resolve() {
        return Product.find();
      },
    },
    cart: {
      type: CartType,
      args: { userId: { type: GraphQLID } },
      resolve(parent, args) {
        return Cart.findOne({ userId: args.userId });
      },
    },
   
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
       
        return User.create(args);
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        return Product.create(args);
      },
    },
    addToCart: {
      type: CartType,
      args: {
        userId: { type: GraphQLID },
        productId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Cart.findOneAndUpdate(
          { userId: args.userId },
          { $addToSet: { products: args.productId } },
          { upsert: true, new: true }
        );
      },
    },
    checkout: {
      type: OrderType,
      args: { userId: { type: GraphQLID } },
      resolve(parent, args) {
        
        return Order.create({ userId: args.userId, products: [], total: 0 });
      },
    },
    
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
