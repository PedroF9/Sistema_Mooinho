 import { useState } from 'react' 
import './App.css'
import NavBar from './components/NavBar'
import Tables from './components/tables'
import ModalForm1 from './components/ModalForm1'

function App() {
const [isOpen, setIsOpen] = useState(false);
const [modalMode, setModalMode] = useState('mode1');
const [searchTerm, setSearchTerm] = useState('');

const handleOpen = (mode) => {
  setIsOpen(true);
  setModalMode(mode);
}
  
const handleSubmit = () => {
  if (modalMode === 'mode1') {
    console.log('mode1 App');
  } else{
    console.log('mode2 App');
  }
}


  return (
    
    <>
    <NavBar onOpen = {() => handleOpen('mode1')} setSearchTerm={setSearchTerm}/>
    <h1 className="text-3xl font-bold">
      Teste_app!
    </h1>

     <Tables handleOpen={handleOpen} searchTerm={searchTerm}/>
     <ModalForm1 isOpen={isOpen} onSubmit={handleSubmit} onClose={() => setIsOpen(false)} mode={modalMode}/>
  </>
)
}

export default App
