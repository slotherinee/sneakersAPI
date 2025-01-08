import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { log } from '@utils/logger';
import prisma from 'src/db/prisma';

dotenv.config();

async function main() {
    log('Server is starting...');
    
    const app: Express = express();
    const port = process.env.PORT;
    
    app.get('/', async (req: Request, res: Response) => {
        res.send('<h1>Express + Typescript Server</h1>');
    })
    
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        log(`Error ${error}`)
        await prisma.$disconnect();
        process.exit(1);
    })