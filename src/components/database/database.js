import Dexie from "dexie";

const db = new Dexie("Tienda");

db.version(1).stores({
  clientes: "++id, nombre, apellido, telefono",
  productos: "++id, nombre, precio, stock",
});

export default db;
