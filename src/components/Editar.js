import React from 'react'

const Editar = () => {

  const titulo_componente = "editar pelicula"

  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <form>
        <input type='text'
                name='titulo'
                className='titulo_editado'
                defaultValue="Titulo original de la pelicula"/>
        <textarea
                name='descripcion'
                defaultValue="descripcion original"
                className='descripcion_editada'/>
         <input type='submit'
                className="editar"
                value="actualizar" 
         />       
      </form>
    </div>
  )
}

export default Editar
