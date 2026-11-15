import { Request, Response } from "express";
import { JogadorService } from "../services/jogador.service.js";

const jogadorService = new JogadorService();

export class JogadorController{

    async create(req: Request,res: Response)
    {
        const dados = req.body;

        await jogadorService.create(dados);
        res.status(200).send();
    }

    async delete(req: Request, res: Response)
    {
        const id = Number(req.params.id);
        await jogadorService.delete(id);
        res.status(200).send();
    }

    async update(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const dados = req.body;
        await jogadorService.update(id,dados);
        res.status(200).send();
    }

    async findAll(req:Request, res:Response)
    {
        const jogadores = await jogadorService.findAll();
        res.status(200).json(jogadores);
    }

    async findById(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const jogador = await jogadorService.findById(id);
        res.status(200).json(jogador);
    }

}
