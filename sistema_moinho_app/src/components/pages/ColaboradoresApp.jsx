import { useState } from 'react'
import axios from 'axios'
import '../../App.css'
import NavBar1 from '../NavBar1'
import Tables1 from '../Tables1'
import ModalForm1 from '../ModalForm1'


function ColaboradoresApp() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [modalMode, setModalMode] = useState('mode1');
  const [searchTerm, setSearchTerm] = useState('');
  const [colaboradorData, setColaboradorData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleOpen1 = (mode, colaborador) => {
    console.log('opening colaborador id:', colaborador.id_colaborador);
    setColaboradorData(colaborador);
    setIsOpen1(true);
    setModalMode(mode);
  }

  const handleSubmit = async (newColaboradorData) => {
    if (modalMode === 'mode1') {
      console.log('mode1.app');//new
      try {

        await axios.post('http://localhost:3000/c/colaboradores', newColaboradorData);
        console.log('success adding', Response.data);
        setRefresh(!refresh);

      } catch (error) {
        console.error('erro ao adicionar colaboradorem "App"', error);
      }


    } else {
      console.log('mode2.app');//edit

      try {
        await axios.put(`http://localhost:3000/c/colaboradores/${colaboradorData.id_colaborador}`, newColaboradorData);
        console.log('success Editing id:', colaboradorData.id_colaborador);
        setRefresh(!refresh);
      } catch (error) {
        console.error('erro ao editar colaborador em "App"', error);

      }

    }
  }


  return (

    <>
    <body className='bg-default'>
      
    
      <NavBar1 OnOpen1={() => handleOpen1('mode1', '')} setSearchTerm={setSearchTerm} />
      <div>
        <a id="bt1" className="btn mx-4" onClick={() => handleOpen1('mode1', '')} style={{ float: 'right' }}>Novo Colaborador</a>
      </div>
      <h1 className="text-3xl font-bold">
        Teste_app!
      </h1>

      <Tables1 handleOpen1={handleOpen1} searchTerm={searchTerm} refresh={refresh} />
      <ModalForm1 isOpen1={isOpen1} OnSubmit={handleSubmit} onClose={() => setIsOpen1(false)} mode={modalMode} colaboradorData={colaboradorData} />
    </body></>
  )
}

export default ColaboradoresApp
