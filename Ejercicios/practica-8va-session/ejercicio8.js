function devuelvemeTrue(){
    return true;
}
const conteo = function (miliseg) {
    setTimeout(() => {
        console.log('hola soy una promesa')
    }, miliseg);
}
conteo(5000)

function* generadora(){
    let id=0
    while(true){
        id+=2
        yield id
    }
}
const gen = generadora()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

