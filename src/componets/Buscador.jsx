import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    // Crear estados y actualizarlo
    setBusqueda(e.target.value);
    // El listado completo de películas
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    if (busqueda.length <= 1 || pelis_encontradas.length === 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      if (pelis_encontradas.filter(peli => peli.titulo.toLowerCase().includes(busqueda.toLowerCase())).length === 0) {
        setNoEncontrado(true);
      }
    } else {
      setNoEncontrado(false);
    }

    // Actualizar estados del listado principal con lo que logró filtrar
    setListadoState(pelis_encontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {(noEncontrado === true && busqueda.length > 1) && (
        <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
      )}

      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete='off'
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
