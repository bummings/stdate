const graphql = require('graphql');

// destructure the GraphQL types (string, integer, etc)
const { GraphQLObjectType, GraphQLString } = graphql;

// you'll define a type for each relationship
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});
