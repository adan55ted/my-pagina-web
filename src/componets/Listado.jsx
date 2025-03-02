import React, { useEffect, useState } from "react";
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("Componente del listado de peliculas cargado!!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    // alert(id)

    // conseguir peliculas almacenadas 
    let pelis_almacenadas = conseguirPeliculas();

    // filtrar esas peliculas para eliminar del arreglo el elemento deseado 
    let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    // console.log(pelis_almacenadas, nuevo_array_peliculas)

    // Actualizar el estado listado
    setListadoState(nuevo_array_peliculas);

    // Actualizar los datos del localStorage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
    alert("pelicula eliminada" + " " + id);
  };

  return (
    <div id="content" className="content">
      {listadoState != null ?
        listadoState.map(peli => {
          return (
            /* Aquí van las peliculas */
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.description}</p>

              <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
              
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
        : <h2>No hay peliculas para mostrar </h2>
      }
    </div>
  );
};
