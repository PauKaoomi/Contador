function addNumber(){
    let etiqueta = document.querySelector("#numPrincipal")
    let numCambio = parseInt(etiqueta.innerHTML)
    let suma = numCambio += 1

    etiqueta.innerHTML = suma
}

function substract(){
    let etiqueta = document.querySelector("#numPrincipal")
    let numCambio = parseInt(etiqueta.innerHTML)
    let resta = numCambio -= 1

    etiqueta.innerHTML = resta
}

function resetCont(){
    let etiqueta = document.querySelector("#numPrincipal")
    etiqueta.innerHTML = 0
}

let buttonMas = window.document.querySelector("#addNumber") 
buttonMas.addEventListener("click", addNumber)

let buttonMenos = window.document.querySelector("#restaNum")
buttonMenos.addEventListener("click", substract)

let reset = window.document.querySelector("#reset")
reset.addEventListener("click", resetCont)