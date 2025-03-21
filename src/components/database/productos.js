import { useEffect, useState } from "react";
import db from "./database";

export function useDatabaseProduct() {
  const [productos, setProductos] = useState([]);

  const fetchData = async () => {
    const data = await db.productos.toArray();
    setProductos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Agregar productos
  const addProduct = async (producto, precio, stock) => {
    await db.productos.add({ producto, precio, stock });
    fetchData();
  };

  //Actualizar productos
  const updateProduct = async (id, producto, precio, stock) => {
    await db.productos.update(id, { producto, precio, stock });
    fetchData();
  };

  //Eliminar productos
  const deleteProduct = async (id) => {
    await db.productos.delete(id);
    fetchData();
  };

  return { productos, addProduct, updateProduct, deleteProduct };
}
