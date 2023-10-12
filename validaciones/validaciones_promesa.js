const registrarEstampado =() =>{
    let nombre_estampado = document.getElementById('estampado').value
    let descripcion = document.getElementById('desc').value
    if(nombre_estampado.length==0) {
        alert('El nombre del estampado esta vacio, verifique')
    }else if(descripcion.length==0){
        alert('El descripcon del estampado esta vacio, verifique')
    }

    return new Promise((resolve, reject)=>{
        if(estadoUsuario){
            resolve('El estampado '+nombre_estampado+' se ha guardado correctamente')
            
        }else{
            reject('Hubo un error, no se pudo guardar el registro del estampado')
        }
    })
}
const boton = document.querySelector('#btn')
boton.addEventListener('click', () => registrarEstampado()
.then(mensaje => alert(mensaje))
.catch(error => alert(error))
)