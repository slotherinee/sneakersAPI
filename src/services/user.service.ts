import prisma from "@db/prisma";
import { CreateUserDto, UpdateUserDto } from "src/dto/user.dto";

export default {
    async getAllUsers() {
        return await prisma.user.findMany();
    },
    async getUserById(id: number) {
        return await prisma.user.findUnique({ where: { id } });
    },
    async createUser(data: CreateUserDto) {
        return await prisma.user.create({ data });
    },
    async updateUser(id: number, data: UpdateUserDto) {
        return await prisma.user.update({ where: { id }, data });
    },
    async deleteUser(id: number) {
        return await prisma.user.delete({ where: { id } });
    },
    async getUserFavorites(userId: number) {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new Error(`User with id ${userId} does not exist.`);
        }
    
        const favorites = await prisma.favorite.findMany({
            where: { userId },
            include: {
                sneaker: true,
            },
        });
    
        return favorites.map((favorite) => favorite.sneaker);
    },
    async addToFavorite(userId: number, sneakerId: number) {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new Error(`User with id ${userId} does not exist.`);
        }

        const sneaker = await prisma.sneaker.findUnique({ where: { id: sneakerId } });
        if (!sneaker) {
            throw new Error(`Sneaker with id ${sneakerId} does not exist.`);
        }
        const existingFavorite = await prisma.favorite.findUnique({
            where: {
                userId_sneakerId: { userId, sneakerId },
            },
        });

        if (existingFavorite) {
            throw new Error(`Sneaker with id ${sneakerId} is already in the user's favorites.`);
        }

        const favorite = await prisma.favorite.create({
            data: {
                userId,
                sneakerId,
            },
            include: {
                sneaker: true,
            },
        });

        return favorite;
        },
}