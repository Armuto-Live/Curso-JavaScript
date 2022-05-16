const boton=document.getElementById("boton");
boton=addEventListener("click",preguntarNombre);


function preguntarNombre(){
    const nombre=prompt("Introduce tu nombre")
    mostrarNombre(nombre);
    saludar();
}


function mostrarNombre(nombre){
    h2.textContent=nombre;
}

function saludar(){
    h1.textContent="Hola 👀";
}