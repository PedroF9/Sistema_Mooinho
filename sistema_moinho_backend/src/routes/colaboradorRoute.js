import express from 'express';

import * as colaboradorController from '../controllers/colaboradorController.js';

const router = express.Router();

router.get('/colaboradores', colaboradorController.getColaboradores);
router.post('/colaboradores', colaboradorController.createColaborador);
router.put('/colaboradores/:id_colaborador', colaboradorController.updateColaborador);
router.delete('/colaboradores/:id_colaborador', colaboradorController.deleteColaborador);
router.get('/colaboradores/search', colaboradorController.searchColaboradores);

export default router;