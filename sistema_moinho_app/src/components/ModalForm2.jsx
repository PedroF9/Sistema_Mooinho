import { useState } from "react";

function ModalForm2({ isOpen2, onClose }) {

    const [especialidade, setEspecialidade] = useState ('');

  return (
    <div className="modal" open={isOpen2}>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Modal Form 2</h2>
        <form>
        <input id="CargoForm" type="text" placeholder="Especialidade" className="input input-bordered w-full max-w-xs" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} />
        </form>
      </div>
      <button className="btn btn-outline m-2" onClick={onClose}>Enviar</button>
    </div>
  );
}

export default ModalForm2;