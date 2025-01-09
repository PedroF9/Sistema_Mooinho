import { useEffect, useState } from "react";

export default function ModalForm1({ isOpen1, onClose, mode, OnSubmit, colaboradorData }) {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    {/*const [error, setError] = useState('');*/ }
    {/*const [especialidades, setEspecialidades] = useState ('');*/ }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !cargo) {
            {/* setError('Todos os campos são obrigatórios');*/ }
            return;
        }
        try {

            const colaboradorData = { nome, cargo };
            await OnSubmit(colaboradorData);
            console.log('succes on modalForm1');
            {/*setError('');*/ }
            onClose();

        } catch (error) {
            console.error('erro ao adicionar colaborador em "ModalForm1"', error);
            console.log('erro ao adicionar colaborador em "ModalForm1"');
            {/*setError('Erro ao adicionar colaborador');*/ }
        }
    }

    useEffect(() => {
        if (mode === 'mode2') {
            console.log('mode2 ModalForm1');
            setNome(colaboradorData.nome);
            setCargo(colaboradorData.cargo);
            {/*setEspecialidades(colaboradorData.especialidades);*/ }
        } else {
            console.log('mode1 ModalForm1');
            setNome('');
            setCargo('');
            {/*setEspecialidades('');*/ }
        }

    }, [mode, colaboradorData]);


    return (
        <dialog id="my_modal_3" className="modal" open={isOpen1}>
            <div className="modal-box">

                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                <form method="dialog" onSubmit={handleSubmit}>

                    <h3 className="font-bold text-lg">{mode === 'mode1' ? 'Novo Colaborador' : 'Editar Colaborador'}</h3>

                    <input id="nomeForm" type="text" placeholder="Nome Colaborador" className="input input-bordered w-full max-w-xs my-2" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <input id="CargoForm" type="text" placeholder="Cargo" className="input input-bordered w-full max-w-xs" value={cargo} onChange={(e) => setCargo(e.target.value)} />


                   {/* <div className="dropdown">
                        <label tabIndex={0} className="btn m-1">TesteDropdown</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <label className="flex items-center">
                                    <input type="checkbox" defaultChecked className="checkbox mr-2" />
                                    Teste1
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input type="checkbox" className="checkbox mr-2" />
                                    Teste2
                                </label>
                            </li>
                        </ul>
                    </div>


                     <select className="select select-bordered w-full max-w-xs" value={especialidades} onChange={(e) => setEspecialidades(e.target.value)}>
                        <option disabled selected>Especialidades</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>*/}
                    <button className="btn btn-outline m-2" onClick={onClose}>Enviar</button>
                </form>
                {/* <p className="py-1">Mode: {mode}</p>
                <p className="py-1">ID: {id}</p> */}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={onClose}>close</button>
            </form>
        </dialog>
    );
}