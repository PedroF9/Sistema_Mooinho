import { useState } from "react";

export default function ModalForm1({ isOpen, onClose, mode, onSubmit }) {

const [nome, setNome] = useState ('');
const [cargo, setCargo] = useState ('');
const [especialidades, setEspecialidades] = useState ('');

const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); 
    
}

    return (
        <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>

                    <h3 className="font-bold text-lg">{mode === 'mode1' ? 'Novo Colaborador' : 'Editar Colaborador'}</h3>

                    <input id="nomeForm" type="text" placeholder="Nome Colaborador" className="input input-bordered w-full max-w-xs my-2" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <input id="CargoForm" type="text" placeholder="Cargo" className="input input-bordered w-full max-w-xs" value={cargo} onChange={(e) => setCargo(e.target.value)} />
                    <select className="select select-bordered w-full max-w-xs" value={especialidades} onChange={(e) => setEspecialidades(e.target.value)}>
                        <option disabled selected>Especialidades</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <button className="btn btn-outline m-2" onClick={onClose}>Enviar</button>
                </form>
                {/* <p className="py-1">Mode: {mode}</p>
                <p className="py-1">ID: {id}</p> */}
            </div>
        </dialog>
    );
}