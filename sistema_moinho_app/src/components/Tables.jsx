import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Tables({ handleOpen, searchTerm, refresh }) {

    const [tableData, setTableData] = useState([]);
    const [especialidadesData, setEspecialidadesData] = useState({});
    const [error, setError] = useState(null);

    const fetchData = () => {
        axios.get('http://localhost:3000/c/colaboradores')
            .then((response) => {
                setTableData(response.data);


            })
            .catch((error) => {
                setError(error);
            });
    };

    const fetchEspecialidades = async (id_colaborador) => {
        try {
            const response = await axios.get(`http://localhost:3000/e/EByC/${id_colaborador}`);
            setEspecialidadesData(prevState => ({
                ...prevState,
                [id_colaborador]: response.data
            }));
        } catch (error) {
            console.error('Erro ao buscar especialidades', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [refresh]);

    useEffect(() => {
        tableData.forEach(colaborador => {
            fetchEspecialidades(colaborador.id_colaborador);
        });
    }, [tableData]);


    const filteredData = tableData.filter((colaborador) =>
        colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id_colaborador) => {
        const confirmDelete = window.confirm('Deseja realmente deletar este colaborador?');
        if (confirmDelete) try {
            await axios.delete(`http://localhost:3000/c/colaboradores/${id_colaborador}`);
            fetchData();
        } catch (error) {
            console.error('erro ao deletar colaborador em "Tables"', error);
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
                        <th>Cargo</th>
                        <th>Especialidade</th>

                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((colaborador) => {
                        return (
                            <tr key={colaborador.id_colaborador}>
                                <td></td>
                                <td className='px-20'> {/* {colaborador.id_colaborador} */}</td>
                                <td>{colaborador.nome}</td>
                                <td>{colaborador.cargo}</td>
                                <td>
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn m-1">especialidades</div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        {especialidadesData[colaborador.id_colaborador]?.map((especialidade) => (
                                                <li key={especialidade.id_especialidade}><a>{especialidade.especialidade}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </td>
                                <td className="px-10">
                                    <button className="btn rounded w-20 btn-primary mx-3" onClick={() => handleOpen('mode2', colaborador)}>Editar</button>

                                    <button className="btn rounded w-20 mx-3 btn-error" onClick={() => handleDelete(colaborador.id_colaborador)}>Deletar</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}