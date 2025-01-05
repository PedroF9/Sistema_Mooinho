import { useState } from "react";

export default function ModalForm1({ isOpen, onClose, mode, OnSubmit, colaboradorData }) {

const [nome, setNome] = useState ('');
const [cargo, setCargo] = useState ('');
{/*const [error, setError] = useState('');*/}
{/*const [especialidades, setEspecialidades] = useState ('');*/}

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !cargo) {
       {/* setError('Todos os campos são obrigatórios');*/}
        return;
      }
    try {
     
        const colaboradorData ={nome, cargo};
        await OnSubmit(colaboradorData);
        console.log('succes on modalForm1');
        {/*setError('');*/}
        onClose();

    } catch (error) {
        console.error('erro ao adicionar colaborador em "ModalForm1"', error);
        console.log('erro ao adicionar colaborador em "ModalForm1"');
        {/*setError('Erro ao adicionar colaborador');*/}
    }
    
}

    return (
        <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>

                    <h3 className="font-bold text-lg">{mode === 'mode1' ? 'Novo Colaborador' : 'Editar Colaborador'}</h3>

                    <input id="nomeForm" type="text" placeholder="Nome Colaborador" className="input input-bordered w-full max-w-xs my-2" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <input id="CargoForm" type="text" placeholder="Cargo" className="input input-bordered w-full max-w-xs" value={cargo} onChange={(e) => setCargo(e.target.value)} />

                   {/* <select className="select select-bordered w-full max-w-xs" value={especialidades} onChange={(e) => setEspecialidades(e.target.value)}>
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
        </dialog>
    );
}