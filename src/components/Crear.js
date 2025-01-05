import React, { useState } from 'react'

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
        guardarEnStorage(peli)
    }
    
    const guardarEnStorage = peli =>{

        //conseguir los elementos qe ya tenemos en localStorage
        let elementos = JSON.parse(localStorage.getItem("pelis"))
        
        //comprobar si es un array
        if(Array.isArray(elementos)){
            elementos.push(peli)
        }else{
            //crear una peli con el nuevo array
            elementos=[peli]
        }

        //guardar en el local storage
        localStorage.setItem("pelis", JSON.stringify(elementos))

        //devolver objeto guardao   
        return peli;
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
