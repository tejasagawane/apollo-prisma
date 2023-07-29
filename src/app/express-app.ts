import express, {Express} from "express";
import bodyParser from "body-parser";
const metrics = require("./metrics");

const app: Express = express();
app.disable("x-powered-by");
app.use(bodyParser.json());
metrics(app);
module.exports = app;