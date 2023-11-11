import { useState } from 'react'
import './App.css'
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { colaboradores } from './colaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0);


  return (
    <>

      <Alert />
      <Buscador />
      <Formulario />
      <Listado colaboradores={colaboradores} />
</>
  );
}

export default App;
