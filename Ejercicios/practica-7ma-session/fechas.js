const fecha_hoy = new Date()
const fecha_nac = new Date(2003,2,31)
console.log(fecha_hoy)
console.log(fecha_nac)

const compare = (fecha_hoy>fecha_nac)
console.log(compare)

const dia_nac = fecha_nac.getDate()
const mes_nac = fecha_nac.getMonth()
const anyo_nac = fecha_nac.getFullYear()
