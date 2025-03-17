import Dexie from "dexie";

const db = new Dexie("Tienda");

db.version(1).stores({
  productos: "++id, nombre, precio, cantidad",
});

export default db;