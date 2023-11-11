import Table from 'react-bootstrap/Table';

function Listado({colaboradores}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>correo</th>
          <th>edad</th>
          <th>cargo</th>
          <th>telefono</th>

        </tr>
      </thead>
      
    </Table>
  );
}

export default BasicExample;