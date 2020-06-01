import { GraphQLServer } from 'graphql-yoga';
import { schema } from './schema';

const server = new GraphQLServer({
    schema,
    //context: createContext,
    //middlewares: [permissions],
});

server.start((options) =>
    console.log(`Server ready at: http://localhost:${options.port}`),
);
