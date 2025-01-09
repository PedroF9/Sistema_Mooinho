import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Tables2({ handleOpen1, searchTerm, refresh }) {

    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = () => {
        axios.get('http://localhost:3000/i/inventario')
            .then((response) => {
                setTableData(response.data);


            })
            .catch((error) => {
                setError(error);
            });
    };



    useEffect(() => {
        fetchData();
    }, [refresh]);



    const filteredData = tableData.filter((inventario) =>
        inventario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inventario.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inventario.unidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inventario.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inventario.local.toLowerCase().includes(searchTerm.toLowerCase())

    );

    const handleDelete = async (id_inventario) => {
        const confirmDelete = window.confirm('Deseja realmente deletar este inventario?');
        if (confirmDelete) try {
            await axios.delete(`http://localhost:3000/i/inventario/${id_inventario}`);
            fetchData();
            console.log('deleted');
        } catch (error) {
            console.error('erro ao deletar inventario em "Tables2"', error);
        }
    }

    return (
        <div className=" mt-5">
            {error && <div className='alert alert-error'>Erro: {error.message}</div>}
            <table className="table table-xs w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>  {/* id */}</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Unidade</th>
                        <th>Quantidade</th>
                        <th>Tipo</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Local</th>

                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((inventario) => {
                        return (
                            <tr key={inventario.id_inventario}>
                                <td></td>
                                <td className='px-20'> {/* {inventario.id_inventario} */}</td>
                                <td>{inventario.nome}</td>
                                <td>{inventario.descricao}</td>
                                <td>{inventario.unidade}</td>
                                <td>{inventario.quantidade}</td>
                                <td>{inventario.tipo}</td>
                                <td>{inventario.min}</td>
                                <td>{inventario.max}</td>
                                <td>{inventario.local}</td>
                                <td className="px-10">
                                    <button className="btn rounded w-20 btn-primary mx-3" onClick={() => handleOpen1('mode2', inventario)}>Editar</button>

                                    <button className="btn rounded w-20 mx-3 btn-error" onClick={() => handleDelete(inventario.id_inventario)}>Deletar</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}