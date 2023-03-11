const lista = ['Jamon', 'Queso', 'Agua', 'Carne', 'Verduras', 'Frutas']
lista.push('Aceite de girasol')
lista.pop('Aceite de girasol')

const peliculas = [
    {titulo:'Piratas del Caribe', director: 'Espen Sandberg', fecha:new Date(2003, 6, 17)},
    {titulo:'Los tres chachitos', director: 'Juan Song', fecha:new Date(2000, 3, 21)},
    {titulo:'Tinker Bell', director: 'Pum Chan Clum', fecha:new Date(2010, 1, 2)}
]
const lista_fecha = peliculas.filter(f =>f.fecha>new Date(2010,0,1))
console.log(lista_fecha)

const lista_direc = peliculas.map(d =>d.director)
console.log(lista_direc)

const lista_tit = peliculas.map(t=>t.titulo)
console.log(lista_tit)

const juntas = lista_direc.concat(lista_tit)
console.log(juntas)

const fact_propag =[...lista_direc,...lista_tit]
console.log(fact_propag)