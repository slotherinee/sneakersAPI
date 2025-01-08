import prisma from '@db/prisma';
import app from './app';
import dotenv from 'dotenv';

const port = process.env.PORT;
dotenv.config();

async function main() { 
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error(`Error ${error}`)
        await prisma.$disconnect();
        process.exit(1);
    })