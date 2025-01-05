import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

export const Crear= () => {

    const [peliState, setPeliState] = useState({
        titulo : "",
        descripcion : ""
    })

    const tituloComponente = "Añadir pelicula"

    const {titulo,descripcion}=peliState


    const conseguirDatosForm = e =>{
        e.preventDefault()

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let peli = {
            id : new Date().getTime(),
            titulo,
            descripcion
        }

        // guerdar estado
        setPeliState(peli)

        // guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli)
    }
    

  return (
    <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            {(titulo && descripcion) && "has creado la pelicula "+ titulo}

            <form onSubmit={conseguirDatosForm}>
                <input type="text" 
                        id="titulo"
                        name="titulo"
                        placeholder="Titulo" />

                <textarea id="description"
                          name="descripcion" 
                          placeholder="Descripción"></textarea>

                <input type="submit" 
                       id="save" 
                       value="Guardar" />
            </form>
    </div>
  )
}

export default Crear;
