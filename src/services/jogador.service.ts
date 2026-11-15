import { prisma } from "../prisma/client.js";

export class JogadorService{

    async create(dados: {nome: string; pais: string; titulo: string; rating: number; imagem: string; })
    {
        await prisma.jogador.create({
            data: dados,
        });
    }

    async delete(id: number)
    {
        await prisma.jogador.delete({
            where: {id}
        });
    }

    async findAll()
    {
        return await prisma.jogador.findMany();
    }

    async findById(id: number)
    {
        return await prisma.jogador.findUnique({
            where: {id}
        });
    }

    async update(id:number, dados: {nome: string; pais: string; titulo: string; rating: number; imagem: string; })
    {
        await prisma.jogador.update({
            where:{id},
            data: dados,
        });
    }

}
