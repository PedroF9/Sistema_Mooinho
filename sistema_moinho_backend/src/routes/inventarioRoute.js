import express from 'express';

import * as inventarioController from '../controllers/inventarioController.js';

const router = express.Router();

router.get('/inventario', inventarioController.getInventario);
router.post('/inventario', inventarioController.createInventario);
router.put('/inventario/:id_inventario', inventarioController.updateInventario);
router.delete('/inventario/:id_inventario', inventarioController.deleteInventario);
router.get('/inventario/search', inventarioController.searchInventario);

export default router;