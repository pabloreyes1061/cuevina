export const GuardarEnStorage = (clave, elemento) =>{

    //conseguir los elementos qe ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(clave))
    
    //comprobar si es un array
    if(Array.isArray(elementos)){
        elementos.push(elemento)
    }else{
        //crear una peli con el nuevo array
        elementos=[elemento]
    }

    //guardar en el local storage
    localStorage.setItem(clave, JSON.stringify(elementos))

    //devolver objeto guardao   
    return elemento ;
}