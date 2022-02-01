var elementoUno, elementoDos;
var rock = "Piedra";
var paper = "Papel"
var sizors = "Tijera"

var resultado = function (a, b) {
    if (a === rock && b === rock || a === paper && b === paper || a === sizors && b === sizors) {
        document.getElementById("empate").style.display = "block"
        document.getElementById("perdio").style.display = "none"
        document.getElementById("gano").style.display = "none"
    } else if (a === rock && b === paper || a === paper && b === sizors || a === sizors && b === rock) {
        document.getElementById("perdio").style.display = "block"
        document.getElementById("empate").style.display = "none"
        document.getElementById("gano").style.display = "none"
    } else if (a === rock && b === sizors || a === sizors && b === paper || a === paper && b === rock) {
        document.getElementById("gano").style.display = "block"
        document.getElementById("perdio").style.display = "none"
        document.getElementById("empate").style.display = "none"
    } 
}

var nombreBoton1 = function (boton) {
    elementoUno = boton;
}
var nombreBoton2 = function (boton) {
    elementoDos = boton;
}