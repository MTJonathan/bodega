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
  id,
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
      <header>
        <h2>{edidAdd ? "Editar Cliente" : "Agregar Cliente"}</h2>
      </header>
      <form>
        <label htmlFor="nombre">
          Nombre:{" "}
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>

        <label htmlFor="apellido">
          Apellido:{" "}
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </label>

        <label htmlFor="telefono">
          Telefono:{" "}
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </label>

        {edidAdd ? (
          <button onClick={editarCliente}>Editar</button>
        ) : (
          <button onClick={agregarCliente}>Agregar</button>
        )}
      </form>

      <button onClick={dialogClose} className="cerrar">
        Cerrar
      </button>
    </dialog>
  );
};

export default AgregarCliente;
