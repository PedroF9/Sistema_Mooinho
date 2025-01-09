import { useState } from 'react'
import axios from 'axios'
import '../../App.css'
import NavBar1 from '../NavBar1'
import Tables2 from '../Tables2'
import ModalForm2 from '../ModalForm2'


function InventarioPage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [modalMode, setModalMode] = useState('mode1');
  const [searchTerm, setSearchTerm] = useState('');
  const [inventarioData, setInventarioData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleOpen1 = (mode, inventario) => {
    console.log('opening inventario id:', inventario.id_inventario);
    setInventarioData(inventario);
    setIsOpen1(true);
    setModalMode(mode);
  }

  const handleSubmit = async (newInventarioData) => {
    if (modalMode === 'mode1') {
      console.log('mode1.app');//new
      try {

        await axios.post('http://localhost:3000/i/inventario', newInventarioData);
        console.log('success adding', Response.data);
        setRefresh(!refresh);

      } catch (error) {
        console.error('erro ao adicionar inventario "App"', error);
      }


    } else {
      console.log('mode2.app');//edit

      try {
        await axios.put(`http://localhost:3000/i/inventario/${inventarioData.id_inventario}`, newInventarioData);
        console.log('success Editing id:', inventarioData.id_inventario);
        setRefresh(!refresh);
      } catch (error) {
        console.error('erro ao editar inventario em "App"', error);

      }

    }
  }


  return (

    <>
      <NavBar1 OnOpen1={() => handleOpen1('mode1', '')} setSearchTerm={setSearchTerm} />
      <div>
        <a id="bt1" className="btn mx-4" onClick={() => handleOpen1('mode1', '')} style={{ float: 'right' }}>Novo Inventario</a>
      </div>
      <h1 className="text-3xl font-bold">
        Teste_app!
      </h1>

      <Tables2 handleOpen1={handleOpen1} searchTerm={searchTerm} refresh={refresh} />
      <ModalForm2 isOpen1={isOpen1} OnSubmit={handleSubmit} onClose={() => setIsOpen1(false)} mode={modalMode} inventarioData={inventarioData} />
    </>
  )
}

export default InventarioPage
