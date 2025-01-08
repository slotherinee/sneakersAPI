import express, { Express } from 'express';
import userRouter from '@routes/user.routes';
import sneakerRouter from '@routes/sneaker.routes';
import orderRouter from '@routes/order.routes';

const app: Express = express();
app.use(express.json());

app.use('/api/users', userRouter)
app.use('/api/sneakers', sneakerRouter)
app.use('/api/orders', orderRouter)

export default app;
