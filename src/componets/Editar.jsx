import React from 'react';

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
  const titulo_componente = "Editar pelicula";

  const guardarEdicion = (e) => {
    e.preventDefault();

    // Conseguir el target del evento
    let target = e.target;

    // Buscar el índice del objeto de la película a actualizar 
    const pelis_almacenadas = conseguirPeliculas();
    const indice = pelis_almacenadas.findIndex(p => p.id === peli.id);

    // Crear un nuevo objeto con los nuevos datos
    let peli_actualizada = {
      id: peli.id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    };

    // Actualizar el elemento con ese índice
    pelis_almacenadas[indice] = peli_actualizada;

    // Guardar el nuevo arreglo de objetos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

    // Actualiza el estado del listado
    setListadoState(pelis_almacenadas);
    setEditar(0);
  };

  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <form onSubmit={guardarEdicion}>
        <input
          type='text'
          name='titulo'
          className='titulo_editado'
          defaultValue={peli.titulo}
        />
        <textarea
          name='descripcion'
          defaultValue={peli.descripcion}
          className='descripcion_editada'
        />
        <input
          type='submit'
          className='editar'
          value='Actualizar'
        />
      </form>
    </div>
  );
};
