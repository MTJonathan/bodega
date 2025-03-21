import { useEffect, useState } from "react";
import Nav from "../../Navbar/Nav";
import { useParams } from "react-router-dom";
import { useDatabaseDeudas } from "../../database/deudas";
import "./detalles.css";

const DetallesCliente = () => {
  const { id, nombre, apellido } = useParams();
  const { deudas, updateDeuda, deleteDeuda, agregarDeuda } =
    useDatabaseDeudas();
  const [deuda, setDeuda] = useState([]);
  const [totalDeuda, setTotalDeuda] = useState(0);

  useEffect(() => {
    // Asegurar que el ID es un número y filtrar las deudas del cliente
    if (deudas.length > 0) {
      const deudaData = deudas.filter((deuda) => deuda.clienteId === id);
      console.log("Deudas filtradas:", deudaData);
      setDeuda(deudaData);
      // Calcular total de toda la deuda
      const total = deudaData.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
      );
      setTotalDeuda(total);
    }
  }, [id, deudas]);
  console.log(deuda);
  return (
    <main className="MainDetalles">
      <Nav />
      <header>
        <h1>
          Detalles Cliente {nombre} {apellido}
        </h1>
        <h2>Total deuda: ${totalDeuda}</h2>
        <button onClick={() => agregarDeuda(id, "Producto", 1000, 10)}>
          Agregar Deuda
        </button>
      </header>
      <section className="Detalles">
        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {deuda.map((deuda) => (
              <tr key={deuda.id}>
                <td>{deuda.producto}</td>
                <td>{deuda.precio}</td>
                <td>{deuda.cantidad}</td>
                <td>{deuda.precio * deuda.cantidad}</td>
                <td className="acciones">
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default DetallesCliente;
