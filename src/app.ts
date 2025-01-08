import express, { Express } from 'express';
import userRouter from '@routes/user.routes';

const app: Express = express();
app.use(express.json());

app.use('/api/users', userRouter)

export default app;
