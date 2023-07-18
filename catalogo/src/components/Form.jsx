import React, {} from "react";

export const Form = (DatosForm, CambiosForm, EnvioForm, FormErrores) => {

    return (
        <div className="card container">
            <h2 className="mt-2">Agregar Producto</h2>
            <form  className='col-11 ms-3' onSubmit={EnvioForm}>
                <div>
                    <label className='form-label'>Nombre:</label>
                    <input type="form-text" className="form-control" id="Nombre" value={DatosForm.Nombre} onChange={CambiosForm} maxLength={30}/>
                    {FormErrores.Nombre && <span style={{ color: 'red' }}>{FormErrores.Nombre}</span>}
                </div>

                <div>
                    <label className='form-label'>Categoria:</label>
                    <input type="form-text" className="form-control" id="Categoria" value={DatosForm.Categoria} onChange={CambiosForm} maxLength={30}/>
                    {FormErrores.Categoria && <span style={{ color: 'red' }}>{FormErrores.Categoria}</span>}
                </div>

                <div>
                    <label className='form-label'>Descripcion:</label>
                    <input type="form-text" className="form-control" id="Descripcion" value={DatosForm.Descripcion} onChange={CambiosForm} maxLength={100}/>
                    {FormErrores.Descripcion && <span style={{ color: 'red' }}>{FormErrores.Descripcion}</span>}
                </div>

                <div>
                    <label className='form-label'>Precio:</label>
                    <input type="form-number" className="form-control" id="Precio" value={DatosForm.Precio} onChange={CambiosForm} maxLength={8}/>
                    {FormErrores.Precio && <span style={{ color: 'red' }}>{FormErrores.Precio}</span>}
                </div>

                <div>
                    <label className='form-label'>Stock:</label>
                    <input type="form-number" className="form-control" id="Stock" value={DatosForm.Stock} onChange={CambiosForm} maxLength={3}/>
                    {FormErrores.Stock && <span style={{ color: 'red' }}>{FormErrores.Stock}</span>}
                </div>
                <div>
                    <button className='me-2 mt-3 mb-4 btn btn-primary' type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}