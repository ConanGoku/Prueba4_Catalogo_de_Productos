import React, { useState, useEffect, useMemo } from 'react'
import { Validaciones } from './Validaciones'
import { ListProductos } from './Catalogo'
import { Cards } from './Cards'
import { Form } from './Form'
import {Buscar} from './Busqueda'

export const Page_Principal = () => {
    const Producto_inicial = useMemo(() => ({ Nombre: '', Categoria: '', Descripcion:'', Precio: '', Stock: '' }), []);
    const [Productos, setProductos] = useState(ListProductos())
    const [DatosForm, setDatosForm] = useState(Producto_inicial)
    const [FormErrores, setFormErrores] = useState(Producto_inicial)
    const [FormValido, setFormValido] = useState(false)
    const [ActualPag, setActualPag] = useState(1)
    const [ProductosPag] = useState(12)

    //Cargar el localStorage existente
    useEffect(() => {
        const Catalogo = localStorage.getItem('Productos')
        if (Catalogo) {
            setProductos(JSON.parse(Catalogo))
        }
    }, []); 

    //Guardar datos en el localStorage
    useEffect(() => {
        localStorage.setItem('Productos', JSON.stringify(Productos))
    }, [Productos])

    //Manejo de los cambios en el formulario
    const CambiosForm = (event) => {
        const { id, value } = event.target
        setDatosForm({ ...DatosForm, [id]: value })
    };

    //Manejo del envio del formulario
    const EnvioForm = (event) => {
        event.preventDefault();
        //Se llama la funcion Validaciones del componente Validaciones
        Validaciones(DatosForm, setFormErrores, setFormValido)
    };

    //Agregar un nuevo producto
    useEffect(() => {
        if (FormValido) {
            const newProducto = {
                Nombre: DatosForm.Nombre.trim(),
                Categoria: DatosForm.Categoria.trim(),
                Descripcion: DatosForm.Descripcion.trim(),
                Precio: parseFloat(DatosForm.Precio),
                Stock: parseInt(DatosForm.Stock, 10),
            };

            setProductos([...Productos, newProducto])
            setDatosForm(Producto_inicial)
            setFormValido(false); // Reiniciar el estado de FormValido para permitir agregar más productos
        }
    }, [FormValido, DatosForm.Categoria, DatosForm.Descripcion, DatosForm.Nombre, DatosForm.Precio, DatosForm.Stock, Producto_inicial, Productos]);

    // Paginación
    const UltimoIndice = ActualPag * ProductosPag;
    const PrimerIndice = UltimoIndice - ProductosPag;
    const PagActualList = Productos.slice(PrimerIndice, UltimoIndice);

    const paginacion = (NumeroPag) => setActualPag(NumeroPag);

    return (
        <div className='container-fluid'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <h1 className='navbar-brand' href='#'>
                        Productos Catalogo
                    </h1>
                    {Buscar(Productos, PagActualList, PrimerIndice, setProductos)}
                </div>
            </nav>

            <div className='row mt-5'>
                <div className='col-md-8'>
                    {Cards(Productos, PagActualList, PrimerIndice, setProductos)}

                    <div className='d-flex justify-content-center mt-3'>
                        <div className='btn-group' role='group'>
                            {Array.from({ length: Math.ceil(Productos.length / ProductosPag) }).map((_, index) => (
                                <button
                                    type='button'
                                    className={`btn btn-primary ${ActualPag === index + 1 ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => paginacion(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>

                    {Form(DatosForm, CambiosForm, EnvioForm, FormErrores)}
                </div>
            </div>

            <footer className='mt-5 mb-5 text-center full-width-footer'>
                <p>&copy; 2022 ConanGoku Entertainment. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Page_Principal;