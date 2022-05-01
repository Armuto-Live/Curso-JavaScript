//Ambito global
var hola="hola";
let holitas="olas olitas";
console.log(hola);
console.log(holitas);

console.log(window);
console.log(window.hola);
console.log(window.holitas);
//Datos primitivos

console.log("********************** var **********************");
var juego="Dota"
console.log("Variable juego antes del bloque:", juego);
//ambito de bloque
{
    var juego="Lol"
    console.log("Variable juego dentro del bloque:", juego);
}
    
console.log("Variable juego despues del bloque:", juego);

console.log("********************** let **********************");

let payaso="chupetin"
console.log("Variable payaso antes del bloque:", payaso);
//ambito de bloque
{
    let payaso="gaaaaaa"
    console.log("Variable payaso dentro del bloque:", payaso);
}

console.log("Variable payaso despues del bloque:", payaso);

//Datos compuestos

const objeto={
    nombre:"Luis",
    edad:32
}
console.log(objeto)

const colores=["blanco","azul","rojo"]
console.log(colores)

objeto.correo="rastastas@letonge.ga"
colores.push("tutankamon")

console.log(objeto);
console.log(colores);