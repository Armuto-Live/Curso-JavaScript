//Declaracion de funcion

function funcionDeclarada(){
    console.log("Ono");
    console.log("Dois");
    console.log("un thre");
}

function devolverValor(){
    
    console.log("ratata");
    console.log("rata");
    console.log("rastastas");
    return "retornando un valor";
}

//Invocación de funcion
funcionDeclarada();
valorFuncion=devolverValor();
console.log(valorFuncion);


function saludar(nombre,edad){
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}

saludar("Tiburoncin",12);
saludar();