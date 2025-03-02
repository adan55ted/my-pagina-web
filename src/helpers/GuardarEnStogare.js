export const guardarEnStorage = peli =>{

    //Conseguir los elementos que ya tenemos en localstogare 
    let elementos= JSON.parse(localStorage.getItem('pelis'));
    console.log(elementos)

    //Comprobar si es un array 

    if(Array.isArray(elementos)){
        //Si es un arreglo, agregar el nuevo elemento 
        elementos.push(peli);
    }else{
        //Crear un nuevo arreglo con la nueva pelicula 
        elementos = [peli]
    }

    //Guardar la pelicula en el almacenamiento local (localStogare)
    localStorage.setItem('pelis', JSON.stringify(elementos))

    //Devolver el objeto 
    return peli;
    
}