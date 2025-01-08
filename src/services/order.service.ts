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
        return await prisma.order.create({
            data: {
                userId,
                sneakerId,
                quantity,
                status: "PENDING",
            }
        })
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