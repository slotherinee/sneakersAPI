import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { log } from '@utils/logger';

dotenv.config();
log('Server is starting...');

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Express + Typescript Server</h1>');
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})