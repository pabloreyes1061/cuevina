import React from 'react'

export default function Buscador() {
  return (
    <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input type="text" id="search_field" />
                <button id="search">Buscar</button>
            </form>
        </div>
  )
}
