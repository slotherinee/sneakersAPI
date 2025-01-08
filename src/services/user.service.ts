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
    }
}