const datos ={
    nombre: 'Octavio',
    apellido: 'Fabris',
    edad:19,
    altura:175,
    eresDesarrollador:true,
}
const getEdad = 'edad'
console.log(datos[getEdad])

const datosAmigos=[
    {nombre: 'Octavio',apellido: 'Fabris',edad:19,altura:175,eresDesarrollador:true,},
    {nombre: 'Juan',apellido: 'Perez',edad:20,altura:180,eresDesarrollador:false,},
    {nombre: 'Paul',apellido: 'Schiavi',edad:21,altura:165,eresDesarrollador:true,}
]
datosAmigos.sort((a,b)=>b.edad-a.edad)
console.log(datosAmigos)
