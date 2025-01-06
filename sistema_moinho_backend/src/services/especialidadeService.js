import { querry } from "../db.js"

export const getEspecialidades = async () => {//função que retorna todos os especialidades

    const { rows } = await querry('SELECT * FROM especialidade');
    return rows;

}

export const createEspecialidade = async (especialidadeData) => {//função que cria um novo especialidade
    const { especialidade } = especialidadeData;

    const { rows } = await querry(
        'INSERT INTO especialidade (especialidade) VALUES ($1) RETURNING *',
        [especialidade]

    );
    return rows[0];
}

export const updateEspecialidade = async (especialidadeData, id_especialidade) => {//função que atualiza um especialidade
    const { especialidade } = especialidadeData;

    const { rows } = await querry(
        'UPDATE especialidade SET especialidade = $1 WHERE id_especialidade = $2 RETURNING *',
        [especialidade, id_especialidade]

    );
    return rows[0];
}

export const deleteEspecialidade = async (id_especialidade) => {//função que deleta um especialidade

    const { rowCount } = await querry('DELETE FROM especialidade WHERE id_especialidade = $1', [id_especialidade]);
    return rowCount > 0; //retorna true se deletou e false se não deletou

}

export const searchEspecialidades = async (searchTerm) => {//função que busca um especialidade
    const { rows } = await querry('SELECT * FROM especialidade WHERE especialidade ILIKE $1', [`%${searchTerm}%`]);
    return rows;
}

export const getColaboradorEspecialidade = async (id_colaborador) => {//função que retorna todas as especialidades de um colaborador
    const { rows } = await querry('SELECT e.*, ce.id_colaborador FROM especialidade e FULL JOIN colaborador_especialidade ce ON e.id_especialidade = ce.id_especialidade WHERE ce.id_colaborador = $1', [id_colaborador]);
    return rows;
}

/*export const Tce = async () => {//função que retorna todos os especialidades

    const { rows } = await querry('SELECT e.*, ce.id_colaborador FROM especialidade e FULL JOIN colaborador_especialidade ce ON e.id_especialidade = ce.id_especialidade WHERE ce.id_colaborador = 1');
    return rows;

}*/