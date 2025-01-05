import * as colaboradorService from '../services/colaboradorService.js';

export const getColaboradores = async (req, res) => {//função que retorna todos os colaboradores
    try {
        const colaboradores = await colaboradorService.getColaboradores();
        res.status(200).json(colaboradores);
    } catch (error) {
        console.error('Erro ao buscar colaboradores', error);
        res.status(500).json({ message: 'interal server error on ctrllr gt!!' });
    }
};

export const createColaborador = async (req, res) => {//função que cria um novo colaborador
    try {
        const colaboradorData = req.body;
        const newColaborador = await colaboradorService.createColaborador(colaboradorData);


        res.status(200).json(newColaborador);
    } catch (error) {
        console.error('Erro ao criar colaborador', error);
        res.status(500).json({ message: 'interal server error on ctrllr nw!!' });
    }
};

export const updateColaborador = async (req, res) => {//função que atualiza um colaborador
    try {
        const id_colaborador = req.params.id_colaborador;
        const colaboradorData = req.body;
        const updateColaborador = await colaboradorService.updateColaborador(colaboradorData, id_colaborador);

        if (!updateColaborador) { return res.status(404).json({ message: 'Colaborador não encontrado' }); }

        res.status(200).json(updateColaborador);
    } catch (error) {
        console.error('Erro ao atualizar colaborador', error);
        res.status(500).json({ message: 'interal server error on ctrllr ud!!' });
    }
};

export const deleteColaborador = async (req, res) => {//função que deleta um colaborador
    try {
        const id_colaborador = req.params.id_colaborador;
        const deleteColaborador = await colaboradorService.deleteColaborador(id_colaborador);

        if (!deleteColaborador) { return res.status(404).json({ message: 'Colaborador não encontrado' }); }

        res.status(200).send('Deleted');
    } catch (error) {
        console.error('Erro ao deletar colaborador', error);
        res.status(500).json({ message: 'interal server error on ctrllr dl!!' });
    }
};

export const searchColaboradores = async (req, res) => {//função que busca um colaborador
    try {
        const searchTerm = req.query.q;
        const colaboradores = await colaboradorService.searchColaboradores(searchTerm);
        res.status(200).json(colaboradores);
    } catch (error) {
        console.error('Erro ao prcurar colaborador', error);
        res.status(500).json({ message: 'interal server error on ctrllr sr!!' })
    }
}; 