import { GraphQLClient } from "graphql-request";

const endpoint = process.env.API_ENDPOINT as string;

const graphqlClient = new GraphQLClient(endpoint);

export default graphqlClient;
