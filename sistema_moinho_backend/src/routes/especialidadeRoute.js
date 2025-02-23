import express from 'express';

import * as especialidadeController from '../controllers/especialidadeController.js';

const router = express.Router();

router.get('/especialidades', especialidadeController.getEspecialidades);
router.post('/especialidades', especialidadeController.createEspecialidade);
router.put('/especialidades/:id_especialidade', especialidadeController.updateEspecialidade);
router.delete('/especialidades/:id_especialidade', especialidadeController.deleteEspecialidade);
router.get('/especialidades/search', especialidadeController.searchEspecialidades);

router.get('/EByC/:id_colaborador', especialidadeController.getColaboradorEspecialidade);

//router.get('/tce', especialidadeController.Tce);

export default router;