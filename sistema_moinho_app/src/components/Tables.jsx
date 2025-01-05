import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Tables({ handleOpen, searchTerm, refresh }) {

    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/c/colaboradores')
            .then((response) => {
                setTableData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
    }, []);


    const fetchData = () => {
        axios.get('http://localhost:3000/c/colaboradores')
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



    const filteredData = tableData.filter((colaborador) =>
        colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
        <div className=" mt-5">
            {error && <div className='alert alert-error'>Erro: {error.message}</div>}
            <table className="table table-xs w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Especialidade</th>

                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((colaborador) => {
                        return (
                            <tr key={colaborador.colaborador_id}>
                                <td className='px-20'></td>
                                <td>{colaborador.nome}</td>
                                <td>{colaborador.cargo}</td>
                                <td>
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn m-1">especialidades</div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="px-10">
                                    <button className="btn rounded w-20 btn-primary mx-3" onClick={() => handleOpen('mode2')}>Editar
                                    </button>

                                    <button className="btn rounded w-20 mx-3 btn-error">Deletar
                                    </button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}