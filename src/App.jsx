import { useState } from 'react'
import './App.css'
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './components/BaseColaboradores';
import { colaboradores } from './colaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BaseColaboradores colaboradores={colaboradores}>
   
    </BaseColaboradores>
  )
}

export default App
