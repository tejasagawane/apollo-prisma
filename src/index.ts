import * as dotenv from 'dotenv';
import {Express} from "express";
import 'reflect-metadata';

const app: Express = require("./app/express-app");
const prismaService = require("./service/prisma-service");
dotenv.config();
prismaService(app);
const port: string = process.env.PORT_NUMBER || '3000';
const index = app.listen(port, () => {
  console.log('🚀 Server ready at: <' + `${process.env.HOST_URL}` + '>');
});

module.exports = index;
