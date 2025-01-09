import * as inventarioService from '../services/inventarioService.js';

export const getInventario = async (req, res) => {//função que retorna todos os inventario
    try {
        const inventario = await inventarioService.getInventario();
        res.status(200).json(inventario);
    } catch (error) {
        console.error('Erro ao buscar inventario', error);
        res.status(500).json({ message: 'interal server error on ctrllr gt!!' });
    }
};

export const createInventario = async (req, res) => {//função que cria um novo inventario
    try {
        const inventarioData = req.body;
        const newInventario = await inventarioService.createInventario(inventarioData);


        res.status(200).json(newInventario);
    } catch (error) {
        console.error('Erro ao criar inventario', error);
        res.status(500).json({ message: 'interal server error on ctrllr nw!!' });
    }
};

export const updateInventario = async (req, res) => {//função que atualiza um inventario
    try {
        const id_inventario = req.params.id_inventario;
        const inventarioData = req.body;
        const updateInventario = await inventarioService.updateInventario(inventarioData, id_inventario);

        if (!updateInventario) { return res.status(404).json({ message: 'Inventario não encontrado' }); }

        res.status(200).json(updateInventario);
    } catch (error) {
        console.error('Erro ao atualizar inventario', error);
        res.status(500).json({ message: 'interal server error on ctrllr ud!!' });
    }
};

export const deleteInventario = async (req, res) => {//função que deleta um inventario
    try {
        const id_inventario = req.params.id_inventario;
        const deleteInventario = await inventarioService.deleteInventario(id_inventario);

        if (!deleteInventario) { return res.status(404).json({ message: 'Inventario não encontrado' }); }

        res.status(200).send('Deleted');
    } catch (error) {
        console.error('Erro ao deletar inventario', error);
        res.status(500).json({ message: 'interal server error on ctrllr dl!!' });
    }
};

export const searchInventario = async (req, res) => {//função que busca um inventario
    try {
        const searchTerm = req.query.q;
        const inventario = await inventarioService.searchInventario(searchTerm);
        res.status(200).json(inventario);
    } catch (error) {
        console.error('Erro ao prcurar inventario', error);
        res.status(500).json({ message: 'interal server error on ctrllr sr!!' })
    }
}; 