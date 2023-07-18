import React from "react";
//importar una imagen local
import img from '../components/8146003.png'


export const Cards = ( Productos, PagActualList,PrimerIndice,setProductos) => {
    //Eliminar Productos de la lista
    const EliminarProducto = (index) => {
        const newProductos = Productos.filter((_, i) => i !== PrimerIndice + index)
        setProductos(newProductos)
    };
    return(
        <div className='container'>
            <div className='row'>
            {PagActualList.map((product, index) => (
                <div className='col-3 mt-2 mb-2' key={index}>
                    <div className='card position-relative container'>
                        <img src={img} className='card-img-top img-fluid' alt='' />
                        <h3 className='text-center'>{product.Nombre}</h3>
                        <p className='text-center'>Categoria: {product.Categoria}</p>
                        <p className='text-center'>Descripcion: {product.Descripcion}</p>
                        <p className='text-center'>Precio: ${product.Precio}</p>
                        <p className='text-center'>Stock: {product.Stock}</p>
                        
                    </div>
                    <button className='btn btn-danger btn-sm' onClick={() => EliminarProducto(index)}>
                        <i className='bi bi-x'></i>
                    </button>
                </div>
                
            ))}
            </div>
        </div>
    )
}
