import React, { useState } from 'react';
import { guardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = ({ setListadoState }) => {

  const tituloComponente = "Añadir Pelicula";

  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: ""
  });

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    // Conseguir los datos del formulario
    let target = e.target;

    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    setPeliState(peli);

    // Actualizar el estado del listado
    setListadoState(elemento => {
      return [...elemento, peli];
    });

    // Guardar en el almacenamiento local 
    guardarEnStorage("pelis", peli);

    // Limpiar el formulario
    target.reset();
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      <strong>
        {(peliState.titulo && peliState.descripcion) && "Has creado la pelicula: " + peliState.titulo}
      </strong>

      <form onSubmit={conseguirDatosForm}>
        <input
          type="text"
          id="title"
          placeholder="Título"
          name='titulo'
        />

        <textarea
          id="description"
          placeholder="Descripción"
          name='descripcion'
        ></textarea>

        <input
          type="submit"
          id="save"
          value="Guardar"
        />
      </form>
    </div>
  );
};
