import Nav from "../Navbar/Nav";
import "./productos.css";
import { useDatabaseProduct } from "../database/productos";
import AgregarProducto from "./AgregarProducto";
import EliminarCliente from "../Clientes/EliminarCliente";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Productos = () => {
  const [id, setId] = useState(null);
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const [editAdd, setEditAdd] = useState(false);

  const productRef = useRef();
  const productRefEliminar = useRef();

  const { productos, addProduct, updateProduct, deleteProduct } =
    useDatabaseProduct();

  const OpenDialog = () => productRef.current.showModal();
  const CloseDialog = () => productRef.current.close();

  const OpenDialogDelete = () => productRefEliminar.current.showModal();
  const CloseDialogDelete = () => productRefEliminar.current.close();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/DetallesCliente");
  };

  const OpenDialogAgregar = () => {
    setProducto("");
    setPrecio("");
    setStock("");
    setEditAdd(false);
    OpenDialog();
  };

  const OpenDialogEdit = (producto) => {
    setEditAdd(true);
    setId(producto.id);
    setProducto(producto.producto);
    setPrecio(producto.precio);
    setStock(producto.stock);
    OpenDialog();
  };

  const OpenDialogEliminar = (producto) => {
    setId(producto.id);
    setProducto(producto.producto);
    OpenDialogDelete();
  };
  return (
    <main className="MainProductos">
      <Nav />
      <header>
        <h1>Productos</h1>
        <button onClick={OpenDialogAgregar}>Añadir Producto</button>
        <AgregarProducto
          setProducto={setProducto}
          setPrecio={setPrecio}
          setStock={setStock}
          refDialog={productRef}
          addProduct={addProduct}
          producto={producto}
          precio={precio}
          stock={stock}
          id={id}
          updateProduct={updateProduct}
          dialogClose={CloseDialog}
          edidAdd={editAdd}
        />
        <EliminarCliente
          refEliminar={productRefEliminar}
          deleteProduct={deleteProduct}
          dialogClose={CloseDialogDelete}
          deleteClient={deleteProduct}
          id={id}
          nombre={producto}
          setId={setId}
          setNombre={setProducto}
        />
      </header>

      <section className="Productos">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.producto}</td>
                <td>s/. {producto.precio}</td>
                <td>{producto.stock}</td>
                <td className="acciones">
                  <button onClick={() => OpenDialogEdit(producto)}>
                    Editar
                  </button>
                  <button
                    onClick={() =>
                      OpenDialogEliminar(producto)
                    }
                  >
                    Eliminar
                  </button>
                  <button>Detalles</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Productos;
