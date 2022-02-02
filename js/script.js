var elementoUno, elementoDos;
var rock = "Piedra";
var paper = "Papel"
var sizors = "Tijera"


function tiempo () {
    //location.reload()
    document.getElementById("empate").style.color = "rgba(0, 0, 0, 0.1)"
    document.getElementById("empate").style.textShadow = "none"
    document.getElementById("perdio").style.color = "rgba(0, 0, 0, 0.1)"
    document.getElementById("perdio").style.textShadow = "none"
    document.getElementById("gano").style.color = "rgba(0, 0, 0, 0.1)"
    document.getElementById("gano").style.textShadow = "none"
    document.getElementById("play-button").style.visibility = "visible"
    document.getElementById("play-buttonCom").style.visibility = "visible";
    document.getElementById("eleccionCom").textContent = "-"
    document.getElementById("eleccionPl").textContent = "-"
}

var resultado = function (a, b) {
    if (elementoUno != "" || elementoDos != "") {
        if (a === rock && b === rock || a === paper && b === paper || a === sizors && b === sizors) {
            document.getElementById("empate").style.color = "rgb(255, 136, 0)";
            document.getElementById("empate").style.textShadow = "0px 1px 6px rgb(255, 136, 0)";
            elementoUno = undefined;
            elementoDos = undefined;
            document.getElementById("play-button").style.visibility = "hidden";
            setTimeout(tiempo, 2000);
        } else if (a === rock && b === paper || a === paper && b === sizors || a === sizors && b === rock) {
            document.getElementById("perdio").style.color = "red";
            document.getElementById("perdio").style.textShadow = "0px 1px 6px red";
            elementoUno = undefined;
            elementoDos = undefined;
            document.getElementById("play-button").style.visibility = "hidden";
            setTimeout(tiempo, 2000);
        } else if (a === rock && b === sizors || a === sizors && b === paper || a === paper && b === rock) {
            document.getElementById("gano").style.color = "rgb(16, 187, 0)";
            document.getElementById("gano").style.textShadow = "0px 1px 6px rgb(16, 187, 0)";
            elementoUno = undefined;
            elementoDos = undefined;
            document.getElementById("play-button").style.visibility = "hidden";
            setTimeout(tiempo, 2000);
        } else {
        alert("Seleccione los objetos para competir de cada jugador");
        }
    }
}

var versusCom = function (a) {

    var elementos = ['Piedra', 'Papel', 'Tijera'];
    var numRandom = Math.floor(Math.random()*elementos.length);
    var elementRand = elementos[numRandom];

    if (elementoUno !== "") {
        if (a === rock && elementRand === rock || a === paper && elementRand === paper || a === sizors && elementRand === sizors) {
            document.getElementById("empate").style.color = "rgb(255, 136, 0)"
            document.getElementById("empate").style.textShadow = "0px 1px 6px rgb(255, 136, 0)"
            document.getElementById("eleccionCom").textContent = elementRand
            document.getElementById("eleccionPl").textContent = a
            elementoUno = undefined;
            elementRand = undefined;
            document.getElementById("play-buttonCom").style.visibility = "hidden";
            setTimeout(tiempo, 2000);
            console.log(numRandom);
        } else if (a === rock && elementRand === paper || a === paper && elementRand === sizors || a === sizors && elementRand === rock) {
            document.getElementById("perdio").style.color = "red"
            document.getElementById("perdio").style.textShadow = "0px 1px 6px red"
            document.getElementById("eleccionCom").textContent = elementRand
            document.getElementById("eleccionPl").textContent = a
            elementoUno = undefined;
            elementRand = undefined;
            document.getElementById("play-buttonCom").style.visibility = "hidden";
            setTimeout(tiempo, 2000);
            console.log(numRandom);
        } else if (a === rock && elementRand === sizors || a === sizors && elementRand === paper || a === paper && elementRand === rock) {
            document.getElementById("gano").style.color = "rgb(16, 187, 0)"
            document.getElementById("gano").style.textShadow = "0px 1px 6px rgb(16, 187, 0)"
            document.getElementById("eleccionCom").textContent = elementRand
            document.getElementById("eleccionPl").textContent = a
            elementoUno = undefined;
            elementRand = undefined;
            document.getElementById("play-buttonCom").style.visibility = "hidden";
            setTimeout(tiempo, 2000);
            console.log(numRandom);
        } else {
            alert("Seleccione los objetos para competir de cada jugador");
        }
}
}

var nombreBoton1 = function (boton) {
    elementoUno = boton;
}
var nombreBoton2 = function (boton) {
    elementoDos = boton;
}