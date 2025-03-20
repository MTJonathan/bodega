import React from "react";

const AgregarProducto = ({
  refDialog,
  dialogClose,
  addProduct,
  edidAdd,
  updateProduct,
  producto,
  setProducto,
  precio,
  setPrecio,
  stock,
  setStock,
  id,
}) => {
  const agregarProducto = (e) => {
    e.preventDefault();
    addProduct(producto, precio, stock);
    setProducto("");
    setPrecio(0);
    setStock(0);
    dialogClose();
  };

  const editarProducto = (e) => {
    e.preventDefault();
    updateProduct(id, producto, precio, stock);
    setProducto("");
    setPrecio(0);
    setStock(0);
    dialogClose();
  };
  return (
    <dialog className="dialogAgregar" ref={refDialog} closedby="any">
      <h2>{edidAdd ? "Editar Producto" : "Agregar Producto"}</h2>
      <form>
        <label htmlFor="nombre">
          Producto:{" "}
          <input
            id="nombre"
            name="nombre"
            required
            type="text"
            placeholder="Producto"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
          />
        </label>

        <label htmlFor="precio">
          Precio:{" "}
          <input
            id="precio"
            name="precio"
            required
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </label>

        <label htmlFor="stock">
          Stock:{" "}
          <input
            id="stock"
            name="stock"
            required
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </label>
        <button
          onClick={edidAdd ? editarProducto : agregarProducto}
          type="submit"
        >
          {edidAdd ? "Editar Producto" : "Agregar Producto"}
        </button>
      </form>
      <button className="cerrar" onClick={dialogClose}>
        Cerrar
      </button>
    </dialog>
  );
};

export default AgregarProducto;
