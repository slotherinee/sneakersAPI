import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrderStatus } from '@controllers/order.controller';
import express from 'express';

const router = express.Router();

router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);
router.put('/:orderId/status', updateOrderStatus);
router.delete('/:id', deleteOrder)


export default router;