import React, { Fragment } from "react";

export const Validaciones = (DatosForm,setFormErrores,setFormValido) => {
    //Validacion del formulario
    const ValidarForm = () => {
        let valid = true
        const errores = {}

        //Validar que el nombre no este vacio o la primera letra sea minuscula, ver con expresiones regulares
        let regex = new RegExp("^[A-Z]")
        if (DatosForm.Nombre.trim() === '' || !regex.test(DatosForm.Nombre)) {
            errores.Nombre = 'Por favor ingrese un nombre valido, debe tener la primera mayusculas'
            valid = false
        }

        if (DatosForm.Categoria.trim() === '') {
            errores.Categoria = 'Por favor ingrese una categoria'
            valid = false
        }

        if (DatosForm.Descripcion.trim() === '' || DatosForm.Descripcion.length < 10) {
            errores.Descripcion = 'Por favor ingrese una descripcion mayor a 10 caracteres'
            valid = false
        }

        const PrecioValorNum = parseFloat(DatosForm.Precio)
        const PrecioValorText = DatosForm.Precio.trim()
        if (PrecioValorText === "" || PrecioValorNum <= 0 || PrecioValorText === "e" || ((PrecioValorNum%1) !== 0)) {
            errores.Precio = 'Por favor ingrese un precio valido'
            valid = false;
        }

        const StockValorNum = parseInt(DatosForm.Stock, 10)
        const StockValorText = DatosForm.Stock.trim()
        if (StockValorText === "" || StockValorNum <= 0) {
            errores.Stock = 'Por favor ingrese un stock valido'
            valid = false
        }

        setFormErrores(errores)
        setFormValido(valid)
    }
    return (
        <Fragment>
            {ValidarForm()}
            setFormErrores(errores);
            setFormValido(valid);
        </Fragment>
    )
}