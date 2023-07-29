import {PrismaClient} from "@prisma/client";
import * as tq from "type-graphql";
import {ApolloServer} from "apollo-server-express";
import {resolvers} from "@generated/type-graphql";
import {Express} from "express";
import {GraphQLSchema} from "graphql/type";

const prismaService = async (app: Express) => {
    const prisma: PrismaClient = new PrismaClient();
    const schema: GraphQLSchema = await tq.buildSchema({resolvers, validate: false})
    const context = () => {
        return {
            prisma
        };
    };
    const server: ApolloServer = new ApolloServer({schema, context});
    await server.start();
    server.applyMiddleware({app, path: "/apollo-with-prisma/graphql"});
};
module.exports = prismaService;