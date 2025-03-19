import React from "react";

const EliminarCliente = ({
  refEliminar,
  nombre,
  deleteClient,
  id,
  setId,
  setNombre,
  dialogClose,
}) => {
  const EliminarCliente = () => {
    deleteClient(id);
    setTimeout(() => {
      setId(null);
      setNombre("");
      dialogClose(); // Luego cierra el modal después de actualizar el estado
    }, 0);
  };
  return (
    <dialog ref={refEliminar} className="dialogEliminar" closedby="any">
      <h2>¿Eliminar a {nombre}?</h2>
      <button onClick={EliminarCliente}>Eliminar</button>
      <button onClick={dialogClose}>Cerrar</button>
    </dialog>
  );
};

export default EliminarCliente;
