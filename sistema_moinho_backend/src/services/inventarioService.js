import { querry } from "../db.js"

export const getInventario = async () => {//função que retorna todos os inventarios

    const { rows } = await querry('SELECT * FROM inventario');
    return rows;

}

export const createInventario = async (inventarioData) => {//função que cria um novo inventario
    const { nome, cargo } = inventarioData;


    const { rows } = await querry(
        'INSERT INTO inventario (nome, descricao, unidade, quantidade, tipo, min, max, local) VALUES ($1, $2, $3, $4,$5, $6, $7, $8) RETURNING *',
        [nome, cargo]

    );
    return rows[0];
}

export const updateInventario = async (inventarioData, id_inventario) => {//função que atualiza um inventario
    const { nome, cargo } = inventarioData;


    const { rows } = await querry(
        'UPDATE inventario SET nome = $1, descricao = $2, unidade = $3, quantidade = $4, tipo = $5, min = $6, max = $7, local = $8 WHERE id_inventario = $9 RETURNING *',
        [nome, descricao, unidade, quantidade, tipo, min, max, local, id_inventario]

    );
    return rows[0];
}

export const deleteInventario = async (id_inventario) => {//função que deleta um inventario

    const { rowCount } = await querry('DELETE FROM inventario WHERE id_inventario = $1', [id_inventario]);
    return rowCount > 0; //retorna true se deletou e false se não deletou

}

export const searchInventario = async (searchTerm) => {//função que busca um inventario
    const { rows } = await querry('SELECT * FROM inventario WHERE nome ILIKE $1 OR descricao ILIKE $1 OR unidade ILIKE $1 OR tipo ILIKE $1 OR local ILIKE $1', [`%${searchTerm}%`]);
    return rows;
}                                                        