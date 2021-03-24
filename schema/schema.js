const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
} = graphql;

const movies = [
    { id: '1', name: 'Pulp Fictin', genre: 'Crime' },
    { id: '2', name: '1989', genre: 'Sci-Fi' },
    { id: '3', name: 'V for vendetta', genre: 'Sci-Fi-Triller' },
    { id: '4', name: 'Snatch', genre: 'Crime-Comedy' },
];

const MoveType = new GraphQLObjectType({
    name: 'Move',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        move: {
            type: MoveType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return movies.find(item => item.id === args.id);
            }
        },
    },
})

module.exports = new GraphQLSchema({
    query: Query,
});