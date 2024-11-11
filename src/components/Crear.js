import React, { useState } from 'react'

export default function Crear() {

    const tituloComponente = "Añadir pelicula a la app"

    const [peliState, setPelistate] = useState({
        titulo: "",
        descripcion:""
    })

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e =>{
        e.preventDefault();
        //conseguir los datos del formulario

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //crear objeto de la pelicula a aguardar

        let peli = {
            id : new Date().getTime(),
            titulo,
            descripcion
        }

        setPelistate(peli)
        console.log(peliState)
        
        
        alert("Formulario enviado carajo "+ titulo + descripcion)
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <strong>
                {(titulo && descripcion) && "Has creado la pelicula " + peliState.titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input type="text" 
                       id="titulo"
                       name="titulo" 
                       placeholder="Titulo"/>

                <textarea id="descripcion"
                          name="descripcion" 
                          placeholder="Descripción"></textarea>

                <input type="submit" 
                       id="save" 
                       value="Guardar" />
            </form>
        </div>
    )
}
