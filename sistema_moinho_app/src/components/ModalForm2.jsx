import { useEffect, useState } from "react";

export default function ModalForm2({ isOpen1, onClose, mode, OnSubmit, inventarioData }) {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [unidade, setUnidade] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [tipo, setTipo] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [local, setLocal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !descricao || !unidade || !quantidade || !tipo || !min || !max || !local) {
      {/* setError('Todos os campos são obrigatórios');*/ }
      return;
    }
    try {

      const inventarioData = { nome, descricao, unidade, quantidade, tipo, min, max, local };
      await OnSubmit(inventarioData);
      console.log('succes on modalForm2');
      {/*setError('');*/ }
      onClose();

    } catch (error) {
      console.error('erro ao adicionar inventario em "ModalForm2"', error);
      console.log('erro ao adicionar inventario em "ModalForm2"');
      {/*setError('Erro ao adicionar inventario');*/ }
    }
  }

  useEffect(() => {
    if (mode === 'mode2') {
      console.log('mode2 ModalForm2');
      setNome(inventarioData.nome);
      setDescricao(inventarioData.descricao);
      setUnidade(inventarioData.unidade);
      setQuantidade(inventarioData.quantidade);
      setTipo(inventarioData.tipo);
      setMin(inventarioData.min);
      setMax(inventarioData.max);
      setLocal(inventarioData.local);

    } else {
      console.log('mode1 ModalForm2');
      setNome('');
      setDescricao('');
      setUnidade('');
      setQuantidade('0');
      setTipo('');
      setMin('0');
      setMax('100');
      setLocal('');

    }

  }, [mode, inventarioData]);


  return (
    <dialog id="my_modal_3" className="modal" open={isOpen1}>
      <div className="modal-box">

        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
        <form method="dialog" onSubmit={handleSubmit}>

          <h3 className="font-bold text-lg">{mode === 'mode1' ? 'Novo Inventario' : 'Editar Inventario'}</h3>

          <input id="nomeForm" type="text" placeholder="Nome Inventario" className="input input-bordered w-full max-w-xs my-2" value={nome} onChange={(e) => setNome(e.target.value)} /><a className="m-2">nome</a>
          <input id="descricaoForm" type="text" placeholder="Descrição" className="input input-bordered w-full max-w-xs" value={descricao} onChange={(e) => setDescricao(e.target.value)} /><a className="m-2">Descrição</a>
          <input id="unidadeForm" type="text" placeholder="Unidade" className="input input-bordered w-full max-w-xs my-2" value={unidade} onChange={(e) => setUnidade(e.target.value)} /><a className="m-2">Unidade</a>
          <input id="quantidadeForm" type="text" placeholder="Quantidade" className="input input-bordered w-full max-w-xs my-2" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} /><a className="m-2">Quantidade</a>
          <input id="tipoForm" type="text" placeholder="Tipo" className="input input-bordered w-full max-w-xs my-2" value={tipo} onChange={(e) => setTipo(e.target.value)} /><a className="m-2">Tipo</a>
          <input id="minForm" type="text" placeholder="Min" className="input input-bordered w-full max-w-xs my-2" value={min} onChange={(e) => setMin(e.target.value)} /><a className="m-2">Min</a>
          <input id="maxForm" type="text" placeholder="Max" className="input input-bordered w-full max-w-xs my-2" value={max} onChange={(e) => setMax(e.target.value)} /><a className="m-2">Max</a>
          <input id="localForm" type="text" placeholder="Local" className="input input-bordered w-full max-w-xs my-2" value={local} onChange={(e) => setLocal(e.target.value)} /><a className="m-2">Local</a>
          <div>
            <button className="btn btn-outline m-2 absolute down-2" onClick={onClose}>Enviar</button>
          </div>
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