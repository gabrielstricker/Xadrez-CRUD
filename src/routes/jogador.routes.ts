import { JogadorController } from "../controller/jogador.controller.js";
import { Router } from "express";

const router = Router();
const jogadorController = new JogadorController();

router.post('/',jogadorController.create);
router.delete('/:id',jogadorController.delete);
router.get('/',jogadorController.findAll);
router.get('/:id',jogadorController.findById);
router.put('/:id',jogadorController.update);

export {router as jogadorRoutes};
