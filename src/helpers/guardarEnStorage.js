export const guardarEnStorage =(clave, elemento)=>{
    //obtener los datos en el stogare 
    let elementos= JSON.parse(localStorage.getItem(clave))

    console.log(elementos)

    //Comprobar que es un arreglo 
    if(Array.isArray(elementos)){
        //Si es un arreglo, agregar el nuevo elemento 
        elementos.push(elemento)
    }else{
        //Crear un nuevo arreglo con la nueva pelicula 
        elementos = [elemento]
    }

    //Guardar la pelicula en el almacenamiento local (localStogare)
    localStorage.setItem('pelis', JSON.stringify(elementos))

    //Devolver el objeto 
    return elemento
    
}