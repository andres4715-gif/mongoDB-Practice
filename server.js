const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLList,
  GraphQLID,
} = require('graphql');
const mongoose = require('mongoose');


// Connect to your Database service in MongoDB
mongoose.connect('mongodb://localhost:27017/mi-base-de-datos', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, '--- WRONG Connection to MongoDB:'));
db.once('open', () => {
  console.log('--- MongoDB is now running');
});

// Define the POST Model: 
const PostModel = mongoose.model('Post', {
  title: String,
  content: String,
  date: String
});

// Define the GraphQL Type to use it in the post 
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    date: { type: GraphQLString },
  },
});

// Define the Mutation GraphQL to create an new post. 
const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createNewMovie: {
        type: PostType,
        args: {
          title: { type: GraphQLString },
          content: { type: GraphQLString },
          date: { type: GraphQLString },
        },
        resolve: async (_, args) => {
          const post = new PostModel(args);
          await post.save();
          return post;
        },
      },
    },
  });

const getType = new GraphQLObjectType({
    name: 'getMovies',
    fields: {
      _id: { type: GraphQLID },
      title: { type: GraphQLString },
      content: { type: GraphQLString },
      date: { type: GraphQLString },
    },
});

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      getAllMovies: {
        type: new GraphQLList(getType),
        resolve: async () => {
          const posts = await PostModel.find();
          return posts;
        },
      },
    },
});

// Define the GraphQL scheme 
const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
  });

// Configure Express to use GraphQL
const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable GraphiQL to test the queries and mutation in the browser
}));

// Run the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`--- GraphQL server in http://localhost:${PORT}/graphql`);
});
