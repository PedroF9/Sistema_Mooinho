import * as especialidadeService from '../services/especialidadeService.js';

export const getEspecialidades = async (req, res) => {//função que retorna todos os especialidades
    try {
        const especialidades = await especialidadeService.getEspecialidades();
        res.status(200).json(especialidades);
    } catch (error) {
        console.error('Erro ao buscar especialidades', error);
        res.status(500).json({ message: 'interal server error on ctrllr gt!!' });
    }
};

export const createEspecialidade = async (req, res) => {//função que cria um novo especialidade
    try {
        const especialidadeData = req.body;
        const newEspecialidade = await especialidadeService.createEspecialidade(especialidadeData);


        res.status(200).json(newEspecialidade);
    } catch (error) {
        console.error('Erro ao criar especialidade', error);
        res.status(500).json({ message: 'interal server error on ctrllr nw!!' });
    }
};

export const updateEspecialidade = async (req, res) => {//função que atualiza um especialidade
    try {
        const id_especialidade = req.params.id_especialidade;
        const especialidadeData = req.body;
        const updateEspecialidade = await especialidadeService.updateEspecialidade(especialidadeData, id_especialidade);

        if (!updateEspecialidade) { return res.status(404).json({ message: 'especialidade não encontrada' }); }

        res.status(200).json(updateEspecialidade);
    } catch (error) {
        console.error('Erro ao atualizar especialidade', error);
        res.status(500).json({ message: 'interal server error on ctrllr ud!!' });
    }
};

export const deleteEspecialidade = async (req, res) => {//função que deleta um especialidade
    try {
        const id_especialidade = req.params.id_especialidade;
        const deleteEspecialidade = await especialidadeService.deleteEspecialidade(id_especialidade);

        if (!deleteEspecialidade) { return res.status(404).json({ message: 'especialidade não encontrada' }); }

        res.status(200).send('Deleted');
    } catch (error) {
        console.error('Erro ao deletar especialidade', error);
        res.status(500).json({ message: 'interal server error on ctrllr dl!!' });
    }
};

export const searchEspecialidades = async (req, res) => {//função que busca um especialidade
    try {
        const searchTerm = req.query.q;
        const especialidades = await especialidadeService.searchEspecialidades(searchTerm);
        res.status(200).json(especialidades);
    } catch (error) {
        console.error('Erro ao prcurar especialidade', error);
        res.status(500).json({ message: 'interal server error on ctrllr sr!!' })
    }
}; 