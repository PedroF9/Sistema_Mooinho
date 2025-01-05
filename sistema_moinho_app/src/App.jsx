import { useState } from 'react' 
import axios from 'axios'
import './App.css'
import NavBar from './components/NavBar'
import Tables from './components/tables'
import ModalForm1 from './components/ModalForm1'


function App() {
const [isOpen, setIsOpen] = useState(false);
const [modalMode, setModalMode] = useState('mode1');
const [searchTerm, setSearchTerm] = useState('');
const [colaboradorData, setColaboradorData] = useState(null);
const [refresh, setRefresh] = useState(false);

const handleOpen = (mode, colaborador) => {
  console.log('colaborador id:', colaborador.id_colaborador);
  setColaboradorData(colaborador);
  setIsOpen(true);
  setModalMode(mode);
}
  
const handleSubmit = async (newColaboradorData) => {
  if (modalMode === 'mode1') {

    try {
      
      console.log('mode1 App');//new
      await axios.post('http://localhost:3000/c/colaboradores', newColaboradorData);
      console.log('Colaborador adicionado com sucesso', Response.data);
      setRefresh(!refresh);
    } catch (error) {
      console.error('erro ao adicionar colaboradorem "App"', error);
    }

    
  } else{
    console.log('mode2 App');//edit

    try {
      await axios.put(`http://localhost:3000/c/colaboradores/${colaboradorData.id_colaborador}`, newColaboradorData);
      console.log('Colaborador editado com sucesso', Response.data);
      setRefresh(!refresh);
    } catch (error) {
      console.error('erro ao editar colaborador em "App"', error);

    }

  }
}


  return (
    
    <>
    <NavBar onOpen = {() => handleOpen('mode1')} setSearchTerm={setSearchTerm}/>
    <h1 className="text-3xl font-bold">
      Teste_app!
    </h1>

     <Tables handleOpen={handleOpen} searchTerm={searchTerm} refresh={refresh}/>
     <ModalForm1 isOpen={isOpen} OnSubmit={handleSubmit} onClose={() => setIsOpen(false)} mode={modalMode} colaboradorData={colaboradorData}/>
  </>
)
}

export default App
