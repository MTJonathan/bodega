import Nav from "../Navbar/Nav";
import "./clientes.css";
import { useDatabaseClient } from "../database/clientes";
import AgregarCliente from "./AgregarCliente";
import { useRef, useState } from "react";

const Clientes = () => {
  const [id, setId] = useState("")
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const { clientes, addClient, updateClient, deleteClient } = useDatabaseClient();
  const [editAdd, setEditAdd] = useState(false);
  const dialogRef = useRef(null);

  const OpenDialog = () => dialogRef.current.showModal();
  const CloseDialog = () => dialogRef.current.close();

  const OpenDialogAgregar = () => {
    setEditAdd(false);
    OpenDialog();
  };

  const OpenDialogEdid = (cliente) => {
    setEditAdd(true);
    setId(cliente.id);
    setNombre(cliente.nombre);
    setApellido(cliente.apellido);
    setTelefono(cliente.telefono);
    OpenDialog();
  };
  return (
    <main className="MainClientes">
      <Nav />
      <header>
        <h1>Clientes</h1>
        <button onClick={OpenDialogAgregar}>Agregar Cliente</button>
        <AgregarCliente
          refDialog={dialogRef}
          dialogClose={CloseDialog}
          addClient={addClient}
          edidAdd={editAdd}
          updateClient={updateClient}
          nombre={nombre}
          setNombre={setNombre}
          apellido={apellido}
          setApellido={setApellido}
          telefono={telefono}
          setTelefono={setTelefono}
          id={id}
        />
      </header>

      <div className="clientes">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes?.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.telefono}</td>
                <td className="acciones">
                  <button onClick={() => OpenDialogEdid(cliente)}>Editar</button>
                  <button>Eliminar</button>
                  <button>Detalles</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Clientes;
