import {Express, Request, Response} from "express";

const metrics = (app: Express) => {
    app.get('/apollo-with-prisma/actuator/health', (req: Request, res: Response) => {
        res.status(200).send('Okay!');
    });
}

module.exports = metrics;