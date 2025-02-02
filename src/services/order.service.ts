import prisma from "@db/prisma";
import { OrderStatus } from "@prisma/client";

export default {
    async getAllOrders() {
        return await prisma.order.findMany({
            include: {
                user: true,
                sneaker: true,
            },
        });
    },
    async getOrderById(orderId: number) {
        return await prisma.order.findUnique({
            where: { id: orderId },
            include: {
                user: true,
                sneaker: true,
            },
        });
    },
    async createOrder(userId: number, sneakerId: number, quantity: number) {
    const sneaker = await prisma.sneaker.findUnique({ where: { id: sneakerId } });

    if (!sneaker) {
        throw new Error(`Sneaker with id ${sneakerId} does not exist.`);
    }

    if (sneaker.stock < quantity) {
        throw new Error(`Insufficient stock for sneaker with id ${sneakerId}. Available stock: ${sneaker.stock}`);
    }

    const order = await prisma.order.create({
        data: {
            userId,
            sneakerId,
            quantity,
            status: "PENDING",
        },
    });

    await prisma.sneaker.update({
        where: { id: sneakerId },
        data: {
            stock: sneaker.stock - quantity,
        },
    });

    return order;
    },
    async updateOrderStatus(orderId: number, status: OrderStatus) {
        return await prisma.order.update({
            where: { id: orderId },
            data: { status },
        })
    },
    async deleteOrder(orderId: number) {
        return await prisma.order.delete({ where: { id: orderId } })
    },
}