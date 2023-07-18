import React, {useState} from "react";
import {Cards} from "./Cards";


export const Buscar = (Productos, PagActualList, PrimerIndice, setProductos) => {
    const [busqueda, setBusqueda] = useState("");
    const [newProductos, setNewProductos] = useState([]);
    let ProductosFiltrados = [];

    const filtrarProductos = () => {
        const regex = new RegExp(busqueda, "gi");
        const ProductosFiltrados = Productos.filter((producto) =>
            producto.Nombre.match(regex)
        );
        setNewProductos(ProductosFiltrados)
        console.log(ProductosFiltrados)
        console.log(newProductos)
        console.log(Productos)
        };
    
    return (
    <form className="row"onSubmit={(e) => {e.preventDefault();filtrarProductos();Cards(ProductosFiltrados, PagActualList, PrimerIndice, setProductos);}}>
        <div className="col-8">
        <input placeholder="Busca un producto" type="text" className="me-2 form-control" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
        </div>
        <div className="col-3">
            <button className="btn btn-primary">Buscar</button>
        </div>
    </form>
    );
};
