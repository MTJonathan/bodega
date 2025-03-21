import { useEffect, useState } from "react";
import db from "./database";

export function useDatabaseDeudas(){
    const [deudas, setDeudas] = useState([]);

    const fetchData = async () => {
        const data = await db.deudas.toArray();
        setDeudas(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    //Agregar deuda
    const agregarDeuda = async (clienteId, producto, precio, cantidad) => {
        await db.deudas.add({clienteId, producto, precio, cantidad});
        fetchData();
    }
    //Actualizar deuda
    const updateDeuda = async (id, clienteId, producto, precio, cantidad) => {
        await db.deudas.update(id, {clienteId, producto, precio, cantidad});
        fetchData();
    }
    //Borrar deuda
    const deleteDeuda = async (id) => {
        await db.deudas.delete(id);
        fetchData();
    }

    return {deudas, updateDeuda, deleteDeuda, agregarDeuda};
}