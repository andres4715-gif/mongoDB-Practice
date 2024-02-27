const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
} = require('graphql');
const mongoose = require('mongoose');


// Connect to your Database service in MongoDB
mongoose.connect('mongodb://localhost:27017/mi-base-de-datos',
  { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, '❌ WRONG Connection to MongoDB:'));
db.once('open', () => {
  console.log('✅ Success connection between GraphQL and MongoDB is now running');
});

// Define the POST Model: 
const PostModel = mongoose.model('Post', {
  title: String,
  content: String,
  date: String,
  actors: {
    type: [{
      name: String,
      role: String,
      age: Number,
    }],
    default: [] // Default to an empty array
  }
});

// Define the GraphQL Type to use it in the post 
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    date: { type: GraphQLString },
    actors: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'Actor',
        fields: {
          name: { type: GraphQLString },
          role: { type: GraphQLString },
          age: { type: GraphQLInt }
        }
      }))
    }
  },
});


const ActorInputType = new GraphQLInputObjectType({
  name: 'ActorInput',
  fields: {
    name: { type: GraphQLString },
    role: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

// Update the fields to expect a list of actors
const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createNewMovie: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        date: { type: GraphQLString },
        actors: { 
          type: new GraphQLList(ActorInputType),
          // Modify ActorInputType to include the age field
        },
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
    actors: { // Define as a function returning the GraphQLList
      type: new GraphQLList(new GraphQLObjectType({
        name: 'Actor_',
        fields: {
          name: { type: GraphQLString },
          role: { type: GraphQLString },
          age: { type: GraphQLInt },
        }
      }))
    }
  },
});


const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getAllMovies: {
      type: new GraphQLList(getType),
      resolve: async () => {
        const posts = await PostModel.find();
        return posts.map(post => ({
          ...post.toObject(),
          actors: post.actors || [] // Ensure actors is an array
        }));
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

// Run the GRAPHQL server 
// example: http://localhost:4000/graphql
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ GraphQL server in http://localhost:${PORT}/graphql`);
});
