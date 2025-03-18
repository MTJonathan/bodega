import { useEffect, useState } from "react";
import db from "./database";

export function useDatabaseClient () {
    const [clientes, setClientes] = useState([]);

    const fetchData = async () => {
        const data = await db.clientes.toArray();
        setClientes(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    //Agregar usarios

    const addClient = async (nombre, apellido, telefono) => {
        await db.clientes.add({ nombre, apellido, telefono });
        fetchData();
    }

    const updateClient = async (id, nombre, apellido, telefono) => {
        await db.clientes.update(id ,{ nombre, apellido, telefono });
        fetchData();
    }

    const deleteClient = async (id) => {
        await db.clientes.delete(id);
        fetchData();
    }

    return {clientes, addClient, updateClient, deleteClient};
}