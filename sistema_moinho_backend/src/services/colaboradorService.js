import { querry } from "../db.js"

export const getColaboradores = async () => {//função que retorna todos os colaboradores

    const { rows } = await querry('SELECT * FROM colaborador');
    return rows;

}

export const createColaborador = async (colaboradorData) => {//função que cria um novo colaborador
    const { nome, cargo } = colaboradorData;


    const { rows } = await querry(
        'INSERT INTO colaborador (nome, cargo) VALUES ($1, $2) RETURNING *',
        [nome, cargo]

    );
    return rows[0];
}

export const updateColaborador = async (colaboradorData, id_colaborador) => {//função que atualiza um colaborador
    const { nome, cargo } = colaboradorData;


    const { rows } = await querry(
        'UPDATE colaborador SET nome = $1, cargo = $2 WHERE id_colaborador = $3 RETURNING *',
        [nome, cargo, id_colaborador]

    );
    return rows[0];
}

export const deleteColaborador = async (id_colaborador) => {//função que deleta um colaborador

    const { rowCount } = await querry('DELETE FROM colaborador WHERE id_colaborador = $1', [id_colaborador]);
    return rowCount > 0; //retorna true se deletou e false se não deletou

}

export const searchColaboradores = async (searchTerm) => {//função que busca um colaborador
    const { rows } = await querry('SELECT * FROM colaborador WHERE nome ILIKE $1 OR cargo ILIKE $1', [`%${searchTerm}%`]);
    return rows;
}