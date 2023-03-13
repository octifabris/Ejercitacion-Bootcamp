function devuelvemeTrue(){
    return true;
}
async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* generadora(){
    let id=0
    while(true){
        yield id +=2
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

