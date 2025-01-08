import prisma from "@db/prisma";
import { CreateSneakerDto, UpdateSneakerDto } from "src/dto/sneaker.dto";

export default {
    async getAllSneakers() {
        return await prisma.sneaker.findMany();
    },
    async getSingleSneaker(sneakerId: number) {
        return await prisma.sneaker.findFirst({
            where: { id: sneakerId }
        })
    },
    async createSneaker(data: CreateSneakerDto) {
        return await prisma.sneaker.create({ data })
    },
    async updateSneaker(sneakerId: number, data: UpdateSneakerDto) {
        return await prisma.sneaker.update({
            where: { id: sneakerId },
            data: { ...data }
        })
    },
    async deleteSneaker(sneakerId: number) {
        return await prisma.sneaker.delete({ where: { id: sneakerId } })
    }
}