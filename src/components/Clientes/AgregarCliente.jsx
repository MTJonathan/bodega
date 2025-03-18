import React, { useState } from "react";
// import { useDatabaseClient } from '../database/clientes';

const AgregarCliente = ({
  refDialog,
  dialogClose,
  addClient,
  edidAdd,
  updateClient,
  nombre,
  setNombre,
  apellido,
  setApellido,
  telefono,
  setTelefono,
  id
}) => {
  

  const agregarCliente = (e) => {
    e.preventDefault();
    addClient(nombre, apellido, telefono);
    setNombre("");
    setApellido("");
    setTelefono("");
    dialogClose();
  };

  const editarCliente = (e) => {
    e.preventDefault();
    updateClient(id, nombre, apellido, telefono);
    setNombre("");
    setApellido("");
    setTelefono("");
    dialogClose();
  };
  return (
    <dialog className="dialogAgregar" ref={refDialog} closedby="any">
      <h2>{edidAdd ? "Editar Cliente" : "Agregar Cliente"}</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <label htmlFor="telefono">Telefono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        {edidAdd ? (
          <button onClick={editarCliente}>Editar</button>
        ) : (
          <button onClick={agregarCliente}>Agregar</button>
        )}
      </form>
      <form method="dialog" className="cerrar">
        <button>Cerrar</button>
      </form>
    </dialog>
  );
};

export default AgregarCliente;
