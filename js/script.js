var elementoUno, elementoDos;
var rock = "Piedra";
var paper = "Papel"
var sizors = "Tijera"

function tiempo () {
    location.reload()
}

var resultado = function (a, b) {
    if (a === rock && b === rock || a === paper && b === paper || a === sizors && b === sizors) {
        document.getElementById("empate").style.color = "rgb(255, 136, 0)"
        document.getElementById("empate").style.textShadow = "0px 1px 6px rgb(255, 136, 0)"
    } else if (a === rock && b === paper || a === paper && b === sizors || a === sizors && b === rock) {
        document.getElementById("perdio").style.color = "red"
        document.getElementById("perdio").style.textShadow = "0px 1px 6px red"

    } else if (a === rock && b === sizors || a === sizors && b === paper || a === paper && b === rock) {
        document.getElementById("gano").style.color = "rgb(16, 187, 0)"
        document.getElementById("gano").style.textShadow = "0px 1px 6px rgb(16, 187, 0)"
    } 
    setTimeout(tiempo, 3000);
}

var nombreBoton1 = function (boton) {
    elementoUno = boton;
}
var nombreBoton2 = function (boton) {
    elementoDos = boton;
}