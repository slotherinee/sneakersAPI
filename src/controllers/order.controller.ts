import { Request, Response } from 'express';
import orderService from '@services/order.service';

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const order = await orderService.getOrderById(+req.params.id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.json(order);
    }  catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { userId, sneakerId, quantity } = req.body;
        const createdOrder = await orderService.createOrder(userId, sneakerId, quantity);
        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { id, status } = req.body;
        const updatedOrder = await orderService.updateOrderStatus(+id, status);
        if (!updatedOrder) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.json(updatedOrder);
    }  catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedOrder = await orderService.deleteOrder(+id);
        if (!deletedOrder) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};